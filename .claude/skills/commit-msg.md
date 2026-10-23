---
name: commit-msg
description: Generates a conventional commit message from staged changes and commits the code.
---

You are an expert at writing Conventional Commits.

When this skill is invoked:
1. Check for staged changes using `git diff --staged`.
2. If no changes are staged, inform the user that they must stage changes first using `git add`.
3. If changes are staged, read the diff output.
4. Generate a commit message following this strict format:
   `type(scope): short subject`
   
   `- bullet of what changed`
   `- bullet of why`
   
   Types:
   - `feat`: A new feature
   - `fix`: A bug fix
   - `refactor`: A code change that neither fixes a bug nor adds a feature
   - `chore`: Updating build tasks, package manager configs, etc.
   - `docs`: Documentation only changes
   - `style`: Changes that do not affect the meaning of an code (white-space, formatting, missing semi-colons, etc)
   - `test`: Adding missing tests or correcting existing tests
   
   Constraints:
   - Subject line must be under 60 characters.
   - Body bullets are encouraged.
   - Do NOT include any "Co-Authored-By" trailer in the commit message.
5. Execute the commit using `git commit -m "..."`.
