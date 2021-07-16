# I Built an App with GitHub Copilot, Here's the Result

![image-20210715145935095](/home/simona/.config/Typora/typora-user-images/image-20210715145935095.png)

I got my invitation to the technical preview of GitHub Copilot two days ago and have been pair programming a bit with my new AI buddy. Check out **our** app [Bamboozled](https://bamboozled.vercel.app/), a minimal quiz ([find the repository here](https://github.com/winnekes/bamboozled-copilot-example)).

**Please note**: Copilot is currently not available publicly, so if you want to test and review it, you have to [join the waitlist](https://github.com/features/copilot/signup).

### But First, What Is GitHub Copilot?

GitHub Copilot is "[your AI pair programmer](https://copilot.github.com/)". It’s an AI-powered tool that can write code by itself, generating quite impressive programming functions, comments and more based on your directions. But what makes Copilot so unique is that it suggests auto-completions on the fly.

It is important to note the difference between the auto-completion provided by your IDE and the one provided by Copilot: your IDE provides suggestions from locally indexed code while Copilot is **capable of creating completely new output from the code it has learned** from public repos.

> **Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips, saving you time and helping you stay focused.**
>
> — GitHub

### Let's Have a Look at the Generated Code

GitHub Copilot and I created a minimal quiz app. We fetch true or false questions from the [Open Trivia API](https://opentdb.com/api_config.php), let the user answer and at the end we display the score of correctly answered questions.

**First**: Let's render the `index.tsx` or the home page.

![](https://i.imgur.com/tJP4kTC.gif)

What I got was:

```tsx
/* 
 render a Center with h="100vh" and a VStack with no props.
  The VStack is a stack of three elements:
  - a Heading with as="h1" and size="3xl" with Text "Bamboozled"
  - a Text with fontSize="xl" and pb={10} with Text "made by winnekes and Github Copilot"
  - if !isQuizRunning render  a Button component with the text "Start the quiz now", 
    size="lg" and onClick={() => setIsQuizRunning(true)}
  - if IsQuizRunning render the Quiz component 
*/
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 as="h1" style={{ fontSize: "3xl" }}>Bamboozled</h1>
          <p style={{ fontSize: "xl", paddingBottom: "10px" }}>
            made by winnekes and Github Copilot
          </p>
          {!isQuizRunning && (
            <button

              style={{
                fontSize: "lg",
                border: "none",
                background: "none",
                color: "white",
                padding: "10px",
                borderRadius: "3px"
              }}

              onClick={() => setIsQuizRunning(true)}
            >
              Start the quiz now
            </button>
          )}
          {isQuizRunning && <Quiz />}
        </div>
      </div>
    </div>
  );
} 

```

Not exactly what I want. I added [Chakra UI](https://chakra-ui.com/) as a dependency, hoping that Copilot would import the necessary dependencies, but unfortunately no dice.

**Next try**, after importing the necessary components:

```tsx
...
import { Quiz } from "./quiz";
import { Center, VStack, Heading, Text, Button } from "@chakra-ui/react";
...
/* 
 render a Center with h="100vh" and a VStack with no props.
  The VStack is a stack of three elements:
  - a Heading with as="h1" and size="3xl" with Text "Bamboozled"
  - a Text with fontSize="xl" and pb={10} with Text "made by winnekes and Github Copilot"
  - if !isQuizRunning render  a Button component with the text "Start the quiz now", 
    size="lg" and onClick={() => setIsQuizRunning(true)}
  - if IsQuizRunning render the Quiz component 
*/
  return (
    <Center h="100vh">
      <VStack>
        <Heading as="h1" size="3xl">
          Bamboozled
        </Heading>
        <Text fontSize="xl" pb={10}>
          made by winnekes and Github Copilot
        </Text>
        {isQuizRunning ? (
          <Quiz />
        ) : (
          <Button size="lg" onClick={() => setIsQuizRunning(true)}>
            Start the quiz now
          </Button>
        )}
      </VStack>
    </Center>
  );
```

Only after importing the components that I want to use here is Copilot able to give me the result that I wanted.

Copilot can only play with the building blocks that you provide in an explicit context, it has absolutely no context of your code structure, dependencies and preferred ways of coding.

---

**Second**: The issue with the boolean questions provided by the API is that we don't get `true` or `false` as the answer but rather the string equivalents, `"True"` and `"False"`, so I asked the Copilot to create a method that converts string to boolean.

![image-20210715170651002](https://i.imgur.com/NFumwsc.gif)

```tsx
  // create a function called getBooleanFromString that returns true if the string is "True"
  const getBooleanFromString = (value: string): boolean => {
    return value === "True";
  };
```

That was simple and straightforward. If you take the provided comment you will probably get the same result as I did.

---

**Last**: Now I want to compare the user's answer with the question's correct answer and increment certain states. 
Copilot had some issues here:

![image-20210715170651002](https://i.imgur.com/1lpndaq.gif)

The result that I wanted for this hacky project:

```tsx
const validateAnswer = (answer: boolean): void => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setQuestionsCorrectlyAnsweredCount(questionsCorrectlyAnsweredCount + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
};
```

What Copilot gave me with my first set of instructions:

```tsx
// compare the answer of the user with questions[currentQuestion].correctAnswer
// in a function called validateAnswer
// and increment questionsCorrectlyAnsweredCount by one if the answer is correct.
// Then increment currentQuestion by one.
  const validateAnswer = (answer: string): boolean => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    return correctAnswer === answer;
  };
  
```

(I am avoiding perfect spelling, grammar and comment syntax on purpose to see the limitations of Copilot.)

This is not what I want. `answer` is not boolean, and the function isn't updating the state as instructed. Let's improve the comment a bit:

```tsx
// Copilot, compare the answer(boolean) of the user with questions[currentQuestion].correctAnswer
// in a function called validateAnswer
// and increment questionsCorrectlyAnsweredCount by one if the answer is correct.
// Then increment currentQuestion by one.
const validateAnswer = (answer: boolean): boolean => {
    const correctAnswer = getBooleanFromString(questions[currentQuestion].correctAnswer);
    if (correctAnswer === answer) {
      setQuestionsCorrectlyAnsweredCount(
        setQuestionsCorrectlyAnsweredCount(questionsCorrectlyAnsweredCount + 1)
      );
    }
    setCurrentQuestion(setCurrentQuestion(currentQuestion + 1));
    return true;
  };
```

Well, `answer` is a boolean now. But the Copilot is for some reason using the method `getBooleanFromString` that it created just before — maybe it is just very proud of the code it generated and wanted to use it. I don't know what spaghetti mess is happening with the state methods, and for some reason we are returning `true`.

Let's try one last time:

```tsx
 
// Copilot, in a function called validateAnswer compare the answer, a boolean value, with questions[currentQuestion].correctAnswer
// and increment questionsCorrectlyAnsweredCount by one using setQuestionsCorrectlyAnsweredCount if the answer is correct.
// Then always increment currentQuestion using setCurrentQuestion by one.
// Don't use the function getBooleanFromString!
// The function does not return anything.
const validateAnswer = (answer: boolean): void => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setQuestionsCorrectlyAnsweredCount(questionsCorrectlyAnsweredCount + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
```

Well, alright!

The process is not perfect, I had to cycle through the alternative the Copilot could produce to get rid of the messy state methods, but it is impressive given that I was not very precise in describing what I want. 



### Will Coding with GitHub Copilot Save You Time?



I compared the time spent on the app in two ways:

- I finished the app in 15 minutes by myself.
- Building the same app again together with GitHub Copilot took me a little over **2 hours**!

It is definitely not efficient to rely on the Copilot for your complete codebase. For one, you have to be very precise and verbose in the instructions or function naming to achieve the desired result. 
In addition to that, you need to prepare before pair programming: that includes importing the functions and libraries that you want Copilot to use before giving instructions. I had to import components from Chakra UI first, otherwise the Copilot was falling back to basic HTML elements.



### The Pros and Cons



GitHub Copilot is far from perfect. You have to verify that the code does what it should do, you have to get rid of code smells and you have to test it thoroughly. It is not yet intelligent enough to code without interference.

But used sparingly it can be useful, especially in the case of working with different language or even just with a new framework you know nothing about. For example, I didn't know the JSON structure of the Quiz API response beforehand, the Copilot was able to successfully map the response to my `Question` type with little modification.

**Pros:**

- **Write comments, get code!**
- **Auto-fill for repetitive code**: based on a few samples that you provide it can crank out a lot more suggestions (for example: you create an Array with `Question` objects (keys being `question` and `answer`, provide a couple of questions and Copilot will add more! This is great for generating mock-data
- **Automatic production of unit tests:** all you need to do is import your preferred testing library and let Copilot magically create a test for your code
- **Cycle through alternatives**: it is up to you to reject or accept the generated code - you can tell Copilot to generate code in a different way
- Learn how to use a new framework without spending your time on reading documentation
- GitHub Copilot works with almost every programming language, but at the moment you get the **best results** with **Python**, **JavaScript** or **TypeScript**.

**Cons:**

- **Code smell:** the generated code is not perfect, it sometimes seems as if it was frankensteined together from different codebases (which it most definitely is)

- **Copilot does not know the context of your codebase**: the tool can only be used on a file to file basis. It does not take your best practices, your code structure or existing utility methods into considerations.

- **Import desired modules first**: I added Axios as a dependency in my project, but Copilot fell back to using Fetch

- **It will be a paid service**

- **Possible copyright infringement:** Developers have shared that the tool has "created" snippets which have been taken verbatim from public repositories. Depending on the license of the code, this could get you into legal trouble, as GitHub states that **you and you alone are responsible for the generated code** if you decide to use it on your code.
  "Unfortunately, the user has no way of knowing if the algorithm made a particular piece of code up by itself or stole it from a code repository protected by a license", says [Jacob Bergdahl](https://medium.com/geekculture/githubs-ai-copilot-might-get-you-sued-if-you-use-it-c1cade1ea229).

- <blockquote class="twitter-tweet"><p lang="en" dir="ltr">oh my gods. they literally have no shame about this.<br><br>GitHub Support just straight up confirmed in an email that yes, they used all public GitHub code, for Codex/Copilot regardless of license. <a href="https://t.co/pFTqbvnTEK">pic.twitter.com/pFTqbvnTEK</a></p>&mdash; ✨ Nora Tindall, automated relay 🪐 (@NoraDotCodes) <a href="https://twitter.com/NoraDotCodes/status/1412741339771461635?ref_src=twsrc%5Etfw">July 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  

### No, GitHub Copilot is Not Stealing Our Dev Jobs

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Developers should be as afraid of GitHub Copilot as mathematicians are of calculators.</p>&mdash; Kelsey Hightower (@kelseyhightower) <a href="https://twitter.com/kelseyhightower/status/1412855977452490755?ref_src=twsrc%5Etfw">July 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I doubt I will ever use the GitHub Copilot on a daily basis, definitely not in professional settings like work for a client or while employed. When your time is costly and precious, correcting GitHub Copilot's code is tedious and gets too frustrating. I am concerned about the copyright issues, and frankly, it is far from replacing a mentor or coding buddy. Using the AI tool will not end the era of asking questions on Stack Overflow or reading through documentations. At the moment, for a seasoned developer, it's a fun program to play with. For a new developer, it's definitely not going to improve your skills.

Though it seems that GitHub Copilot will be a paid service, OpenAI will release the Codex soon to the public. Developers will be able to leverage the ["AI that translates natural language into code"](https://openai.com/) in their own projects — this is promising for low code applications, making code more accessible, or for teaching children how to code.

What do you think of GitHub Copilot? Have you tried it out yourself? I want to hear from you!
