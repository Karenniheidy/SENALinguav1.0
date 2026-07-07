import type { CurriculumItem, CurriculumLesson, CurriculumModule, SkillType } from '@/types';

function item(
  id: string,
  skill: SkillType,
  q: string,
  o: string[],
  c: number,
  f: string,
  o4?: string
): CurriculumItem {
  const options = o.length >= 4 ? o : [...o, o4 ?? ''];
  if (options.length !== 4) throw new Error(`Item ${id} must have 4 options`);
  return { id, skill, q, o: options, c, f };
}

function buildLesson(id: string, title: string, questions: CurriculumItem[]): CurriculumLesson {
  return { id, title, questions };
}

function buildModule(id: string, title: string, subtitle: string, lessons: CurriculumLesson[]): CurriculumModule {
  return { id, title, subtitle, lessons };
}

const A1_CURRICULUM = [
    buildModule('a1-m1', 'Module 1: Development Environment & UI Literacy', 'Foundational technical reading for software apprentices', [
        buildLesson('a1-m1-l1', 'Lesson 1.1 — Reading Interface Labels', [
            item('a1-1-1', 'Reading', 'In a login form, the label "Username" refers to:', ['The user\'s password', 'The identifier used to authenticate an account', 'The server hostname', 'The display name shown in the user profile menu'], 1, 'Username is the unique identifier for authentication, distinct from the password.'),
            item('a1-1-2', 'Listening', 'You hear: "Click Save to store your changes." What should you do?', ['Close the application without saving', 'Select Save to persist your modifications', 'Restart the computer', 'Open settings and disable auto-save'], 1, 'Save persists modifications to storage. Closing without saving may discard changes.'),
            item('a1-1-3', 'Speaking', 'A teammate asks: "Did you restart the IDE?" Which response is clearest?', ['"Maybe."', '"Yes, I restarted Visual Studio Code after installing the extension."', '"IDE."', '"I think so, probably."'], 1, 'Clear technical responses include the tool name and the action performed.'),
            item('a1-1-4', 'Writing', 'Choose the best label for a button that submits a registration form:', ['Go', 'Submit Registration', 'Press', 'Cancel'], 1, 'Action labels should be specific and describe the operation unambiguously.'),
            item('a1-1-5', 'Reading', 'An error states: "File not found." This means:', ['The requested file does not exist at the specified path', 'The internet connection failed', 'The keyboard is disconnected', 'The file was moved to a different folder on the same drive'], 0, 'File not found indicates the system cannot locate the file at the given path.')
        ]),
        buildLesson('a1-m1-l2', 'Lesson 1.2 — Basic Error Messages', [
            item('a1-1-6', 'Reading', '"Connection refused" typically indicates:', ['The target service is not accepting connections on that port', 'The monitor is turned off', 'The code compiled successfully', 'The user cancelled the operation before it finished'], 0, 'Connection refused means the server rejected or is unavailable on the requested port.'),
            item('a1-1-7', 'Listening', 'You hear: "Open the terminal and run npm install." What is the first step?', ['Open the command-line terminal application', 'Delete node_modules permanently', 'Send an email to the instructor', 'Run the installer as administrator on another machine'], 0, 'npm install is executed in the terminal after navigating to the project directory.'),
            item('a1-1-8', 'Speaking', 'How do you politely ask for help with an installation error?', ['"Fix it."', '"Could you help me review this installation error? I have attached the log output."', '"Error."', '"Help me now."'], 1, 'Professional requests include context and relevant diagnostic information.'),
            item('a1-1-9', 'Writing', 'Select the clearest folder name for a frontend project:', ['stuff', 'frontend-app', 'aaa', 'myProject'], 1, 'Descriptive folder names improve project organisation and team collaboration.'),
            item('a1-1-10', 'Listening', 'You hear: "The build failed." What happened?', ['The compilation or build process did not complete successfully', 'The project was deployed to production', 'All tests passed', 'The build completed and artifacts were published successfully'], 0, 'A failed build means the project could not be compiled or packaged successfully.')
        ])
    ]),
    buildModule('a1-m2', 'Module 2: Version Control Foundations', 'Introduction to Git vocabulary and basic workflows', [
        buildLesson('a1-m2-l1', 'Lesson 2.1 — Git Terminology', [
            item('a1-2-1', 'Reading', 'In Git, a "commit" is:', ['A saved snapshot of changes in the repository history', 'A type of virus', 'An email notification', 'A command that deletes all remote branches'], 0, 'A commit records a snapshot of staged changes in version history.'),
            item('a1-2-2', 'Listening', 'You hear: "Stage your changes before committing." What should you do?', ['Use git add to prepare changes for the next commit', 'Delete the repository', 'Rename the main branch', 'Commit directly without reviewing staged files'], 0, 'Staging (git add) prepares modifications before they are committed.'),
            item('a1-2-3', 'Speaking', 'Which phrase correctly describes cloning a repository?', ['"I cloned the remote repository to my local machine."', '"I cloned the keyboard."', '"Clone is done maybe."', '"I downloaded Git from the website."'], 0, 'Cloning copies a remote repository to a local development environment.'),
            item('a1-2-4', 'Writing', 'Best commit message for adding a README file:', ['update', 'docs: add project README with setup instructions', 'asdf', 'wip'], 1, 'Commit messages should follow convention and describe the change purpose.'),
            item('a1-2-5', 'Reading', '"Branch" in Git refers to:', ['An independent line of development', 'A hardware component', 'A CSS property', 'A network cable used for server connections'], 0, 'Branches allow parallel development without affecting the main codebase.')
        ]),
        buildLesson('a1-m2-l2', 'Lesson 2.2 — Basic Git Operations', [
            item('a1-2-6', 'Reading', 'git status shows:', ['The current state of the working directory and staging area', 'The weather forecast', 'CPU temperature', 'A list of all contributors who cloned the repository'], 0, 'git status reports modified, staged, and untracked files.'),
            item('a1-2-7', 'Listening', 'You hear: "Push your commits to the remote." What does this mean?', ['Upload local commits to the remote repository', 'Remove all commits', 'Format the hard drive', 'Download commits from the remote to your local machine'], 0, 'git push transfers local commits to the remote server.'),
            item('a1-2-8', 'Speaking', 'During stand-up, how do you report Git progress?', ['"I did Git."', '"I created a feature branch and pushed two commits for the login form."', '"Branches."', '"I used version control today."'], 1, 'Stand-up updates should specify branch, commits, and feature context.'),
            item('a1-2-9', 'Writing', 'Select the appropriate PR title:', ['changes', 'feat: add user login form validation', '???', 'fix bug'], 1, 'PR titles use conventional prefixes and describe the feature scope.'),
            item('a1-2-10', 'Listening', 'You hear: "There is a merge conflict in app.js." What is required?', ['Manually resolve conflicting changes before completing the merge', 'Ignore the conflict and continue', 'Uninstall Git', 'Wait for the conflict to resolve automatically after 24 hours'], 0, 'Merge conflicts require manual resolution of incompatible changes.')
        ])
    ])
];

const A2_CURRICULUM = [
    buildModule('a2-m1', 'Module 1: Documentation & Troubleshooting', 'Intermediate reading and support communication', [
        buildLesson('a2-m1-l1', 'Lesson 1.1 — Reading Technical Documentation', [
            item('a2-1-1', 'Reading', 'API docs state: "Requires Bearer token in Authorization header." You must:', ['Include a valid token in the Authorization header', 'Disable authentication', 'Change the database schema', 'Send the token in the URL query string only'], 0, 'Bearer tokens authenticate API requests via the Authorization header.'),
            item('a2-1-2', 'Listening', 'You hear: "Check the stack trace starting from the innermost exception." What do you inspect?', ['The deepest (innermost) exception in the error chain', 'The application logo', 'The CSS colour palette', 'The outermost exception message shown first in the log'], 0, 'The innermost exception often reveals the root cause of the failure.'),
            item('a2-1-3', 'Speaking', 'How do you explain a bug to a senior developer?', ['"It fails."', '"The POST /orders endpoint returns 500 when the payload omits the customerId field."', '"Backend."', '"Something is wrong with the API."'], 1, 'Precise bug reports include endpoint, status code, and conditions.'),
            item('a2-1-4', 'Writing', 'Best subject for a support ticket:', ['help', '[Support] Unable to connect to staging database', '???', 'API problem'], 1, 'Support tickets need environment, issue summary, and clear categorisation.'),
            item('a2-1-5', 'Reading', '"Deprecated" in documentation means:', ['The feature is discouraged and may be removed in future versions', 'The feature is newly released', 'The feature is mandatory', 'The feature is required for all new implementations'], 0, 'Deprecated APIs should be replaced with supported alternatives.')
        ]),
        buildLesson('a2-m1-l2', 'Lesson 1.2 — Code Comments & Team Email', [
            item('a2-1-6', 'Writing', 'Select the most useful inline documentation:', ['loop', 'Retry up to 3 times before failing — required by payment gateway SLA', 'code', 'TODO — fix later'], 1, 'Documentation should explain non-obvious business rules or constraints.'),
            item('a2-1-7', 'Listening', 'You hear: "Please cherry-pick commit a1b2c3d onto the release branch." What is requested?', ['Apply a specific commit to another branch', 'Delete the release branch', 'Merge all branches at once', 'Merge the entire main branch into your feature branch'], 0, 'Cherry-pick applies individual commits across branches.'),
            item('a2-1-8', 'Speaking', 'In a planning meeting, which statement defines scope?', ['"I will do backend."', '"I will implement pagination on GET /products with unit tests by Friday."', '"Maybe API."', '"I will work on tasks this sprint."'], 1, 'Scope statements include endpoint, deliverable, and deadline.'),
            item('a2-1-9', 'Reading', 'A README section "Prerequisites" lists:', ['Required tools and versions before setup', 'The project\'s marketing slogan', 'Team birthdays', 'Team contact information and office locations'], 0, 'Prerequisites document dependencies needed before installation.'),
            item('a2-1-10', 'Writing', 'Professional email to request environment access:', ['"Give me access."', '"Dear IT Team, could you please grant me staging access for project ADSO-3312932? Thank you."', '"access pls"', '"Need staging access ASAP thx"'], 1, 'Professional emails are polite, specific, and include project context.')
        ])
    ]),
    buildModule('a2-m2', 'Module 2: Agile Workflows & Code Review', 'Collaboration language for development teams', [
        buildLesson('a2-m2-l1', 'Lesson 2.1 — Pull Requests & Issues', [
            item('a2-2-1', 'Reading', 'A PR comment: "Consider extracting this into a utility function." The reviewer suggests:', ['Refactoring repeated logic into a reusable function', 'Deleting the file', 'Changing the programming language', 'Increasing the font size in the editor'], 0, 'Extraction reduces duplication and improves maintainability.'),
            item('a2-2-2', 'Listening', 'You hear: "The CI pipeline is red." What does this mean?', ['Automated checks failed', 'The UI colour theme changed', 'The sprint ended', 'Continuous integration completed successfully'], 0, 'A red pipeline indicates failed builds, tests, or quality gates.'),
            item('a2-2-3', 'Speaking', 'How do you respond when asked about a failed test?', ['"Tests bad."', '"The UserServiceTest fails because the mock repository returns null for GetById."', '"I don\'t know."', '"I will look at it later."'], 1, 'Explain which test fails and the underlying cause.'),
            item('a2-2-4', 'Writing', 'Best issue title for a performance problem:', ['slow', '[Perf] Dashboard query exceeds 3s on datasets >10k rows', 'fix', 'bug in dashboard'], 1, 'Issue titles should include category, symptom, and measurable context.'),
            item('a2-2-5', 'Reading', '"LGTM" in a code review typically means:', ['Looks Good To Me — approval to merge', 'Log Git Terminal Mode', 'Launch Global Test Module', 'Let Git Terminal Merge — automated deployment tool'], 0, 'LGTM signals reviewer approval of the proposed changes.')
        ]),
        buildLesson('a2-m2-l2', 'Lesson 2.2 — Stand-ups & Handover Notes', [
            item('a2-2-6', 'Speaking', 'Strong stand-up update format:', ['"Same as yesterday."', '"Yesterday I fixed the auth middleware; today I will add integration tests; no blockers."', '"Working."', '"Yesterday: stuff. Today: stuff."'], 1, 'Stand-ups follow yesterday / today / blockers structure.'),
            item('a2-2-7', 'Listening', 'You hear: "We need a rollback plan before deployment." What is required?', ['A documented procedure to revert to the previous stable version', 'A new programming language', 'Removing all tests', 'A procedure to increase server capacity before deployment'], 0, 'Rollback plans mitigate deployment risk in production environments.'),
            item('a2-2-8', 'Writing', 'Handover note for a colleague covering your task:', ['"Good luck."', '"Branch: feature/payments. Remaining: validate webhook signature. See TODO in PaymentController.cs line 84."', '"Done."', '"Check the repo."'], 1, 'Handover notes include branch, remaining work, and file references.'),
            item('a2-2-9', 'Reading', '"Blocked" in agile context means:', ['Progress cannot continue until an impediment is resolved', 'The task is complete', 'The sprint was cancelled', 'The task is waiting in the backlog for next sprint'], 0, 'Blockers prevent task completion and should be escalated promptly.'),
            item('a2-2-10', 'Listening', 'You hear: "Let\'s pair on this bug after stand-up." What is proposed?', ['Collaborative debugging session with a colleague', 'Solo work only', 'Skipping the bug fix', 'Working independently without sharing screen or context'], 0, 'Pairing enables shared context and faster resolution of complex issues.')
        ])
    ])
];

const B1_CURRICULUM = [
    buildModule('b1-m1', 'Module 1: APIs & System Integration', 'Advanced technical reading and integration language', [
        buildLesson('b1-m1-l1', 'Lesson 1.1 — API Contracts & HTTP Semantics', [
            item('b1-1-1', 'Reading', 'OpenAPI spec: "POST /users returns 201 on success." 201 means:', ['Resource created successfully', 'Server error', 'Authentication required', 'Request accepted and queued for processing'], 0, 'HTTP 201 Created indicates successful resource creation.'),
            item('b1-1-2', 'Listening', 'You hear: "The client must send an Idempotency-Key header for POST requests." Why?', ['To safely retry requests without duplicating side effects', 'To encrypt the payload', 'To change the response format', 'To compress the request body with gzip encoding'], 0, 'Idempotency keys prevent duplicate operations on retried requests.'),
            item('b1-1-3', 'Speaking', 'Explain an API rate-limiting issue to the team:', ['"API bad."', '"We are receiving 429 responses because our batch job exceeds 100 req/min; I propose exponential backoff."', '"Fix API."', '"The API is slow sometimes."'], 1, 'Technical explanations include status code, cause, and proposed mitigation.'),
            item('b1-1-4', 'Writing', 'Document an endpoint in a wiki:', ['"It works."', '"POST /api/v1/orders — Creates an order. Requires Bearer auth. Body: { customerId, items[] }. Returns 201 + orderId."', '"Orders."', '"API for orders."'], 1, 'API documentation specifies method, path, auth, payload, and response.'),
            item('b1-1-5', 'Reading', '"Pagination" in API design refers to:', ['Splitting large result sets into manageable pages', 'Encrypting responses', 'Deleting old records', 'Caching responses in the client browser only'], 0, 'Pagination limits response size and improves performance for large datasets.')
        ]),
        buildLesson('b1-m1-l2', 'Lesson 1.2 — Integration Failures & Debugging', [
            item('b1-1-6', 'Reading', 'Log: "SSL handshake failed: certificate expired." Action:', ['Renew or replace the expired TLS certificate', 'Increase RAM', 'Rename the service', 'Restart the application server without changing certificates'], 0, 'Expired certificates break TLS handshakes and must be renewed.'),
            item('b1-1-7', 'Listening', 'You hear: "The webhook signature validation failed." What failed?', ['The HMAC/signature check on the incoming webhook payload', 'The database backup', 'The CSS build', 'The webhook URL was not registered in the dashboard'], 0, 'Webhook signatures verify payload authenticity and integrity.'),
            item('b1-1-8', 'Speaking', 'Mock interview: "Describe how you debugged a production incident."', ['"I fixed it quickly."', '"I correlated logs, identified a memory leak in the cache service, rolled back release 2.4.1, and wrote a post-mortem."', '"Production."', '"We had an outage."'], 1, 'Incident responses cover detection, diagnosis, mitigation, and documentation.'),
            item('b1-1-9', 'Writing', 'Post-mortem summary sentence:', ['"Bad day."', '"Root cause: race condition in OrderProcessor under concurrent load. Mitigation: distributed lock added in v2.4.2."', '"Fixed."', '"Incident resolved."'], 1, 'Post-mortems document root cause and corrective actions.'),
            item('b1-1-10', 'Listening', 'You hear: "Circuit breaker opened for PaymentService." Meaning:', ['The service stopped forwarding requests after repeated failures', 'Payment succeeded', 'The sprint review started', 'The payment service received a successful response from the gateway'], 0, 'Circuit breakers prevent cascade failures by halting calls to unhealthy services.')
        ])
    ]),
    buildModule('b1-m2', 'Module 2: Professional Technical Communication', 'PRs, interviews, and formal reporting', [
        buildLesson('b1-m2-l1', 'Lesson 2.1 — Pull Requests & Code Review Language', [
            item('b1-2-1', 'Reading', 'PR description: "Breaking change: removes v1 endpoints." Implication:', ['Clients using v1 endpoints must migrate before upgrading', 'No impact on consumers', 'Only UI changes', 'Only internal team members are affected'], 0, 'Breaking changes require consumer migration and version planning.'),
            item('b1-2-2', 'Listening', 'You hear: "Request changes — missing unit tests for edge cases." Required action:', ['Add unit tests covering edge cases before re-review', 'Merge immediately', 'Close the repository', 'Request a senior reviewer instead of adding tests'], 0, 'Request changes means address feedback before approval.'),
            item('b1-2-3', 'Speaking', 'Defend a design decision in review:', ['"Because I said so."', '"I chose event-driven updates to decouple the notification service from order processing, reducing coupling."', '"Design."', '"I followed a tutorial."'], 1, 'Design rationale should reference architecture goals and trade-offs.'),
            item('b1-2-4', 'Writing', 'Formal bug report for security issue:', ['"Security bug!!!"', '[SEC] SQL injection vector in search parameter — steps to reproduce attached', '"hack"', '"Found vulnerability"'], 1, 'Security reports use clear severity tags and reproduction steps.'),
            item('b1-2-5', 'Reading', '"Squash and merge" in GitHub:', ['Combines all commits into one before merging', 'Deletes the repository', 'Creates a new branch', 'Rebases all branches onto a new default branch'], 0, 'Squash merge consolidates commit history into a single commit on the target branch.')
        ]),
        buildLesson('b1-m2-l2', 'Lesson 2.2 — Junior Technical Interviews', [
            item('b1-2-6', 'Speaking', 'Interview: "Explain REST in your own words."', ['"REST is web stuff."', '"REST is an architectural style using stateless HTTP methods and resource-based URLs to perform CRUD operations."', '"I don\'t know REST."', '"REST is when you use the internet."'], 1, 'Definitions should mention statelessness, HTTP methods, and resources.'),
            item('b1-2-7', 'Listening', 'You hear: "Walk me through your debugging process." Best approach:', ['Describe systematic steps: reproduce, isolate, hypothesise, test, verify', 'Say you guess randomly', 'Decline to answer', 'Describe only the tools you would install'], 0, 'Structured debugging demonstrates professional methodology.'),
            item('b1-2-8', 'Writing', 'Thank-you email after technical interview:', ['"Thanks."', '"Dear [Name], thank you for the opportunity to interview for the Junior Developer role. I enjoyed discussing the API integration challenge. Kind regards."', '"Bye"', '"Thanks for the interview bye"'], 1, 'Post-interview emails are concise, professional, and reference specific discussion points.'),
            item('b1-2-9', 'Reading', 'Job description: "Familiarity with CI/CD pipelines." This requires:', ['Understanding automated build, test, and deployment workflows', 'Only manual deployments', 'Graphic design skills', 'Experience designing marketing landing pages only'], 0, 'CI/CD automates integration, testing, and delivery of software changes.'),
            item('b1-2-10', 'Listening', 'You hear: "Tell me about a time you received constructive feedback." Respond with:', ['A specific example showing reflection and improvement', '"I never get feedback."', '"Feedback is bad."', 'Decline to share any personal experience'], 0, 'Behavioural answers use STAR format: situation, task, action, result.')
        ])
    ])
];

const CURRICULUM_MAP = { A1: A1_CURRICULUM, A2: A2_CURRICULUM, B1: B1_CURRICULUM };

export function getModulesForLevel(level) {
    return CURRICULUM_MAP[level] || CURRICULUM_MAP.A1;
}

export function getLessonById(level, lessonId) {
    const modules = getModulesForLevel(level);
    for (const mod of modules) {
        const lesson = mod.lessons.find(l => l.id === lessonId);
        if (lesson) return { module: mod, lesson };
    }
    return null;
}

export function getAllLessonsForLevel(level) {
    return getModulesForLevel(level).flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id, moduleTitle: m.title })));
}

export function countTotalLessons(level) {
    return getAllLessonsForLevel(level).length;
}
