# ScrapyardHK

Monolothic Repository for all of Scrapyard HK 2025 resources.

## Resources
The following resources are licensed under the MIT license.
1. ScrapsDB: 
   A database to manage financial accounts for all hackers, including an escrow system.
2. TSE, The Scraps Exchange:
   a centralized stock exchange system utilizing websockets, able to simulate real market events.
3. web
   A NextJS webapp for Scrapyard HK.
4. ATM
   Files for an ATM that uses an NFC card for account holding and dispenses physical scrap tokens; hexagons cut out from 3.5mm acrylic.

## Contributing Guidelines
- Avoid making several commits over a long period of time for a singular feature, if a singular feature cannot be completed in less than 3 commits, make a branch on the repo.
- Avoid working in several subresources at the same time.
- When making a commit, write readable messages:
  - Start with the type of commit, (feat, fix, docs, style, refactor, perf, test, chore, etc)
  - Follow with the scope, specfically within a resource, for example the escrow system for the financialDB
  - Followed by the subject, what does this comment do
  
  All in all it should look like: 
  > feat(escrow): Add support for holding scraps on a transaction
  [Gitmojis](https://gitmoji.dev/) are allowed, and reccomended!

