/**
 * Banco diagnóstico MCER — Inglés técnico para desarrollo de software (A1 · A2 · B1)
 * Cuatro opciones por ítem (a–d). Índice correcto en `c` (base 0).
 */

// ── Etiquetas de opciones ──
export const DIAGNOSTIC_OPTION_LABELS = ['a', 'b', 'c', 'd'];

// ── Preguntas del diagnóstico ──
export const mockQuestions = [
    // ── Nivel A1 ──
    {
        id: 1,
        cefr: 'A1',
        skill: 'Reading',
        difficulty: 0.22,
        discrimination: 1.0,
        q: 'In an IDE toolbar, the label "Save" means you should:',
        o: [
            'Delete the project from version control',
            'Permanently store the current file changes on disk',
            'Compile the application for production release',
            'Send the source code to the client by email'
        ],
        c: 1
    },
    {
        id: 2,
        cefr: 'A1',
        skill: 'Listening',
        difficulty: 0.24,
        discrimination: 1.05,
        q: 'You hear in a tutorial: "Open the terminal and run npm install." What is the first step?',
        o: [
            'Publish the package to the npm registry',
            'Merge the main branch into production',
            'Launch the command-line interface on your machine',
            'Disable all linter rules in the project'
        ],
        c: 2
    },
    {
        id: 3,
        cefr: 'A1',
        skill: 'Writing',
        difficulty: 0.26,
        discrimination: 1.0,
        q: 'Select the most appropriate subject line when requesting a password reset from IT support:',
        o: [
            'URGENT!!! FIX NOW',
            'Hello',
            'My computer',
            'Password reset request — ADSO developer account'
        ],
        c: 3
    },
    {
        id: 4,
        cefr: 'A1',
        skill: 'Speaking',
        difficulty: 0.23,
        discrimination: 1.0,
        q: 'During your first daily stand-up, which phrase politely signals that you need clarification?',
        o: [
            '"That makes no sense."',
            '"Could you repeat the task name? I want to make sure I understood it correctly."',
            '"I refuse to work on that."',
            '"Done."'
        ],
        c: 1
    },
    {
        id: 5,
        cefr: 'A1',
        skill: 'Reading',
        difficulty: 0.28,
        discrimination: 1.1,
        q: 'A README states: "Prerequisites: Node.js 18+." This means:',
        o: [
            'The project only works without JavaScript',
            'You need to remove all dependencies from package.json',
            'You must install Node.js version 18 or newer before starting',
            'The application cannot run on Windows'
        ],
        c: 2
    },
    // ── A2 ──
    {
        id: 6,
        cefr: 'A2',
        skill: 'Reading',
        difficulty: 0.48,
        discrimination: 1.3,
        q: 'After running git status, you see "modified: src/services/authService". This indicates:',
        o: [
            'The remote repository was deleted',
            'The branch was successfully merged to main',
            'The file has uncommitted local changes',
            'All unit tests passed automatically'
        ],
        c: 2
    },
    {
        id: 7,
        cefr: 'A2',
        skill: 'Listening',
        difficulty: 0.52,
        discrimination: 1.35,
        q: 'You hear: "Please rebase your feature branch onto main before opening the pull request." You should:',
        o: [
            'Replay your commits on top of the latest main branch history',
            'Delete the main branch and force-push your feature',
            'Close the repository and create a new one',
            'Skip code review and deploy immediately'
        ],
        c: 0
    },
    {
        id: 8,
        cefr: 'A2',
        skill: 'Writing',
        difficulty: 0.50,
        discrimination: 1.25,
        q: 'Choose the best Slack message to inform the team about a delayed deployment:',
        o: [
            'deploy broken lol',
            'Not my problem today',
            'Hi team — deployment to staging is delayed by ~30 min due to a failing integration test. I will update once the pipeline is green.',
            '???'
        ],
        c: 2
    },
    {
        id: 9,
        cefr: 'A2',
        skill: 'Speaking',
        difficulty: 0.46,
        discrimination: 1.2,
        q: 'In a planning meeting, which response best requests a code review?',
        o: [
            '"Review it yourself."',
            '"I do not write bugs."',
            '"Ship it now."',
            '"Could someone review PR #214 when you have a moment? It refactors the login module."'
        ],
        c: 3
    },
    {
        id: 10,
        cefr: 'A2',
        skill: 'Reading',
        difficulty: 0.55,
        discrimination: 1.4,
        q: 'An API doc says: "Returns HTTP 404 if the resource ID does not exist." A 404 in this context means:',
        o: [
            'The server is permanently offline',
            'The requested record was not found on the server',
            'Authentication succeeded and data was created',
            'The client must upgrade to HTTP/3'
        ],
        c: 1
    },
    // ── B1 ──
    {
        id: 11,
        cefr: 'B1',
        skill: 'Reading',
        difficulty: 0.78,
        discrimination: 1.7,
        q: 'In a code review comment: "This endpoint is not idempotent; retries may duplicate records." The primary risk is:',
        o: [
            'The UI theme will switch to dark mode automatically',
            'Git will reject all future commits on the branch',
            'Repeated identical requests may create duplicate database entries',
            'The compiler will optimize away error handling'
        ],
        c: 2
    },
    {
        id: 12,
        cefr: 'B1',
        skill: 'Listening',
        difficulty: 0.82,
        discrimination: 1.75,
        q: 'You hear: "We need to roll back the canary deployment because error rates spiked in production." The team should:',
        o: [
            'Increase traffic to the new build to gather more errors',
            'Revert the partial release and restore the last stable version',
            'Delete all application logs to hide the spike',
            'Disable monitoring alerts until the next sprint'
        ],
        c: 1
    },
    {
        id: 13,
        cefr: 'B1',
        skill: 'Writing',
        difficulty: 0.80,
        discrimination: 1.65,
        q: 'Select the most professional commit message for fixing a null reference in UserService:',
        o: [
            'fixed stuff',
            'fix(UserService): guard against null profile in GetProfile()',
            'asdfasdf',
            'WIP'
        ],
        c: 1
    },
    {
        id: 14,
        cefr: 'B1',
        skill: 'Speaking',
        difficulty: 0.76,
        discrimination: 1.6,
        q: 'During a sprint review, which explanation best describes technical debt to a product owner?',
        o: [
            '"Debt means we owe money to the bank."',
            '"Refactoring is a waste of time."',
            '"We shipped faster by deferring refactoring; paying it down now will reduce bugs and speed up future features."',
            '"The code is perfect."'
        ],
        c: 2
    },
    {
        id: 15,
        cefr: 'B1',
        skill: 'Reading',
        difficulty: 0.85,
        discrimination: 1.9,
        q: 'A sequence diagram note reads: "Client polls GET /jobs/{id} every 2s until status is COMPLETED." This pattern is commonly used to:',
        o: [
            'Encrypt passwords at rest in the database',
            'Track asynchronous job progress without keeping a persistent connection open',
            'Replace unit tests with manual QA checklists',
            'Bypass OAuth2 token expiration policies'
        ],
        c: 1
    }
];
