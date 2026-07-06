var He=Object.defineProperty;var Ne=(t,e,s)=>e in t?He(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Z=(t,e,s)=>Ne(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const Ee={defaultLanguage:"en-GB",apiMockDelayMs:350},_e=["a","b","c","d"],ae=[{id:1,cefr:"A1",skill:"Reading",difficulty:.22,discrimination:1,q:'In an IDE toolbar, the label "Save" means you should:',o:["Delete the project from version control","Permanently store the current file changes on disk","Compile the application for production release","Send the source code to the client by email"],c:1},{id:2,cefr:"A1",skill:"Listening",difficulty:.24,discrimination:1.05,q:'You hear in a tutorial: "Open the terminal and run npm install." What is the first step?',o:["Publish the package to the npm registry","Merge the main branch into production","Launch the command-line interface on your machine","Disable all linter rules in the project"],c:2},{id:3,cefr:"A1",skill:"Writing",difficulty:.26,discrimination:1,q:"Select the most appropriate subject line when requesting a password reset from IT support:",o:["URGENT!!! FIX NOW","Hello","My computer","Password reset request — ADSO developer account"],c:3},{id:4,cefr:"A1",skill:"Speaking",difficulty:.23,discrimination:1,q:"During your first daily stand-up, which phrase politely signals that you need clarification?",o:['"That makes no sense."','"Could you repeat the task name? I want to make sure I understood it correctly."','"I refuse to work on that."','"Done."'],c:1},{id:5,cefr:"A1",skill:"Reading",difficulty:.28,discrimination:1.1,q:'A README states: "Prerequisites: Node.js 18+." This means:',o:["The project only works without JavaScript","You need to remove all dependencies from package.json","You must install Node.js version 18 or newer before starting","The application cannot run on Windows"],c:2},{id:6,cefr:"A2",skill:"Reading",difficulty:.48,discrimination:1.3,q:'After running git status, you see "modified: src/services/authService". This indicates:',o:["The remote repository was deleted","The branch was successfully merged to main","The file has uncommitted local changes","All unit tests passed automatically"],c:2},{id:7,cefr:"A2",skill:"Listening",difficulty:.52,discrimination:1.35,q:'You hear: "Please rebase your feature branch onto main before opening the pull request." You should:',o:["Replay your commits on top of the latest main branch history","Delete the main branch and force-push your feature","Close the repository and create a new one","Skip code review and deploy immediately"],c:0},{id:8,cefr:"A2",skill:"Writing",difficulty:.5,discrimination:1.25,q:"Choose the best Slack message to inform the team about a delayed deployment:",o:["deploy broken lol","Not my problem today","Hi team — deployment to staging is delayed by ~30 min due to a failing integration test. I will update once the pipeline is green.","???"],c:2},{id:9,cefr:"A2",skill:"Speaking",difficulty:.46,discrimination:1.2,q:"In a planning meeting, which response best requests a code review?",o:['"Review it yourself."','"I do not write bugs."','"Ship it now."','"Could someone review PR #214 when you have a moment? It refactors the login module."'],c:3},{id:10,cefr:"A2",skill:"Reading",difficulty:.55,discrimination:1.4,q:'An API doc says: "Returns HTTP 404 if the resource ID does not exist." A 404 in this context means:',o:["The server is permanently offline","The requested record was not found on the server","Authentication succeeded and data was created","The client must upgrade to HTTP/3"],c:1},{id:11,cefr:"B1",skill:"Reading",difficulty:.78,discrimination:1.7,q:'In a code review comment: "This endpoint is not idempotent; retries may duplicate records." The primary risk is:',o:["The UI theme will switch to dark mode automatically","Git will reject all future commits on the branch","Repeated identical requests may create duplicate database entries","The compiler will optimize away error handling"],c:2},{id:12,cefr:"B1",skill:"Listening",difficulty:.82,discrimination:1.75,q:'You hear: "We need to roll back the canary deployment because error rates spiked in production." The team should:',o:["Increase traffic to the new build to gather more errors","Revert the partial release and restore the last stable version","Delete all application logs to hide the spike","Disable monitoring alerts until the next sprint"],c:1},{id:13,cefr:"B1",skill:"Writing",difficulty:.8,discrimination:1.65,q:"Select the most professional commit message for fixing a null reference in UserService:",o:["fixed stuff","fix(UserService): guard against null profile in GetProfile()","asdfasdf","WIP"],c:1},{id:14,cefr:"B1",skill:"Speaking",difficulty:.76,discrimination:1.6,q:"During a sprint review, which explanation best describes technical debt to a product owner?",o:['"Debt means we owe money to the bank."','"Refactoring is a waste of time."','"We shipped faster by deferring refactoring; paying it down now will reduce bugs and speed up future features."','"The code is perfect."'],c:2},{id:15,cefr:"B1",skill:"Reading",difficulty:.85,discrimination:1.9,q:'A sequence diagram note reads: "Client polls GET /jobs/{id} every 2s until status is COMPLETED." This pattern is commonly used to:',o:["Encrypt passwords at rest in the database","Track asynchronous job progress without keeping a persistent connection open","Replace unit tests with manual QA checklists","Bypass OAuth2 token expiration policies"],c:1}],ze=["Jenny Carolina Marrugo Ussa","Nicolás Ruiz Colorado","Erik Santiago Alegría Rojas","Karen Niheidy Pastás Valencia","Jatniel Esneider Astudillo Benavides","Cristian David Yalanda Pillimue","Óscar Santiago Castro Ayala","Adriana Julieth Eraso Montero","Karen Vanessa Castañeda Morán","Sara Isabel Campo Calapsú","Samuel Santiago López Ruano","Astrith Katherine Benavides Imbachi","Emmanuel Bonilla Salazar","Beckan Hungría Rodríguez","Sebastián Alejandro Bolaños Bolaños","Andrés Felipe Montano Bernal","Miguel Ángel Rivera Inchima","Luis Fernando Conejo Quiñones","Andrea Melissa Eraso Montero","Cristian David Montilla Ordoñez","José David Ortega Golondrino"];function Fe(t){const e=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().split(" "),s=e[0],a=e.length>=3?e[e.length-2]:e[e.length-1];return`${s}.${a}@misena.edu.co`}function We(t,e){const s=["A1","A2","B1"];return{id:`app-${e+1}`,name:t,email:Fe(t),level:s[e%3],streak:Math.max(1,e%7+1),points:320+e*45,lastActivity:"2026-06-24T14:30:00"}}const xe=ze.map(We),Ye=[{email:"instructor@sena.edu.co",role:"instructor",name:"Lead Instructor ADSO"},{email:"docente.adso@sena.edu.co",role:"instructor",name:"Instructor Técnico ADSO"},...xe.map(t=>({email:t.email,role:"apprentice",name:t.name,assignedLevel:t.level}))];function Ge(){const t="2026-02-10T08:00:00.000Z";return{ficha:"3312932",program:"Análisis y Desarrollo de Software (ADSO)",code:"ADSO331",createdAt:t,displayAt:t,dateHistory:[{action:"created",at:t,by:"system",recordedAt:t}],state:"Active",apprentices:xe.map(e=>({...e}))}}const le="senaligua_state_v4",Ue=["lang","user","diagnosticStep","diagnosticAnswers","assignedLevel","diagnosticCompleted","lessonProgress","learnerStats","progressPercent","enrolledClassroomCode","classrooms","viewClassroomFicha"];function pe(){return{lang:Ee.defaultLanguage,user:null,diagnosticStep:0,diagnosticAnswers:[],assignedLevel:null,diagnosticCompleted:!1,activeLessonId:null,currentLessonStep:0,lessonAnswers:[],lessonProgress:{},learnerStats:{streak:1,points:0,rank:null},progressPercent:0,enrolledClassroomCode:null,classrooms:[Ge()],viewClassroomFicha:null,historyStack:["home"],pendingResetEmail:null}}function Ve(){try{const t=localStorage.getItem(le);return t?JSON.parse(t):null}catch{return null}}function Ke(t){try{const e={};Ue.forEach(s=>{e[s]=t[s]}),localStorage.setItem(le,JSON.stringify(e))}catch{}}class Je{constructor(){Z(this,"state");Z(this,"listeners",[]);const e=pe(),s=Ve();this.state=s?{...e,...s,historyStack:["home"],activeLessonId:null,currentLessonStep:0,lessonAnswers:[],pendingResetEmail:null}:e}getState(){return this.state}setState(e){this.state={...this.state,...e},Ke(this.state),this.listeners.forEach(s=>s(this.state))}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(s=>s!==e)}}reset(){localStorage.removeItem(le),this.state=pe(),this.listeners.forEach(e=>e(this.state))}}const d=new Je,he={"en-GB":{"nav.back":"← Back","nav.badge":"ADSO · Technical English","footer.rights":"All rights reserved.","hero.badge":"Specialised Platform for Software Developers","hero.title.line1":"Master Technical English","hero.title.line2":"for Software Development","hero.desc":"SENALingua helps ADSO apprentices build functional competence in technical English — reading documentation, interpreting error messages, collaborating in English-speaking teams, and performing in real software development contexts.","hero.badge.skill":"Reading · Listening · Speaking · Writing","hero.badge.cefr":"CEFR Diagnostic A1–B1","btn.start":"Create Account","btn.login":"Sign In","context.title":"Built for the Software Development Ecosystem","context.desc":"Many ADSO apprentices struggle to understand technical documentation, system messages, APIs, and professional communication in English. SENALingua is not a general language application — it is an EdTech platform that connects linguistic learning with technical performance in software development scenarios.","offer.title":"Core Product Capabilities","offer.diag":"CEFR Diagnostic Assessment","offer.diag.desc":"Initial classification across A1, A2, and B1 with skill-level analysis in Reading, Listening, Speaking, and Writing within technical contexts.","offer.skills":"Skill-Based Technical Practice","offer.skills.desc":"Structured activities for documentation comprehension, audio instructions, technical explanations, and professional written communication.","offer.modules":"Contextual ADSO Modules","offer.modules.desc":"Thematic units aligned to software development: version control, debugging, APIs, pull requests, and junior technical interviews.","offer.instructor":"Instructor Observability","offer.instructor.desc":"Classroom management, enrolment codes, apprentice monitoring, progress tracking, and academic traceability for pedagogical intervention.","journey.title":"Learning Journey","journey.s1":"Access and classroom enrolment","journey.s2":"CEFR diagnostic and level assignment","journey.s3":"Personalised route and module practice","journey.s4":"Feedback, progress, and continuous improvement","auth.create":"Create Your Account","auth.create.sub":"Register with your institutional email or connect via Gmail, Outlook, or GitHub.","auth.email":"Institutional Email Address","auth.pass":"Password","auth.submit":"Continue","auth.or":"or continue with email","auth.oauth.gmail":"Continue with Gmail","auth.oauth.outlook":"Continue with Outlook","auth.oauth.github":"Continue with GitHub","auth.oauth.hint":"Sign in with your provider — one click.","auth.login.title":"Sign In to Your Account","auth.login.sub":"The system will recognise whether you are registered as an apprentice or instructor.","auth.login.submit":"Sign In","auth.have.account":"Already have an account?","auth.go.login":"Sign in here","auth.no.account":"Don't have an account?","auth.go.register":"Create one here","auth.error.already":"This email is already registered. Please sign in.","auth.error.not.registered":"No account found for this email. Please register first.","auth.error.password":"Please enter your password.","auth.error.wrong_password":"Incorrect password. Please try again.","auth.error.password_short":"Password must be at least 8 characters.","auth.error.password_mismatch":"Passwords do not match.","auth.error.invalid_reset_code":"Invalid recovery code. Please check and try again.","auth.error.reset_expired":"This recovery code has expired. Request a new one.","auth.error.generic":"Something went wrong. Please try again.","auth.forgot.link":"Forgot your password?","auth.forgot.title":"Recover Your Password","auth.forgot.sub":"Enter your institutional email and we will send you a recovery code.","auth.forgot.submit":"Send Recovery Code","auth.forgot.sent.title":"Recovery Code Sent","auth.forgot.sent.sub":"Use the 6-digit code below to set a new password. (Simulated for demo)","auth.forgot.code.label":"Your recovery code","auth.forgot.continue":"Set New Password","auth.forgot.back":"Back to sign in","auth.reset.title":"Create New Password","auth.reset.sub":"Enter the code from your email and choose a secure new password.","auth.reset.code":"Recovery Code","auth.reset.new_pass":"New Password","auth.reset.confirm_pass":"Confirm Password","auth.reset.submit":"Update Password","auth.reset.success.title":"Password Updated","auth.reset.success.sub":"Your password has been changed successfully. You can now sign in.","auth.reset.success.cta":"Go to Sign In","auth.register.success.title":"Registration Successful!","auth.register.success.sub.apprentice":"Your apprentice account is ready. You can now take the CEFR diagnostic and start your technical English learning path.","auth.register.success.sub.instructor":"Your instructor account is ready. You can now manage classrooms and monitor your apprentices.","auth.register.success.cta.apprentice":"Start Diagnostic Assessment","auth.register.success.cta.instructor":"Go to Instructor Dashboard","auth.register.success.badge":"Account verified","role.heading":"Select Your Role","role.badge":"✦ Choose your path","role.sub":"Choose how you will use the platform within the ADSO learning environment.","role.learn":"Software Apprentice","role.learn.tag":"Learner","role.learn.sub":"Access diagnostic assessment, personalised routes, and technical English modules.","role.learn.cta":"Start learning path →","role.learn.cta.text":"Start learning path","role.inst":"Instructor","role.inst.tag":"Educator","role.inst.sub":"Manage classrooms, share enrolment codes, and monitor apprentice progress.","role.inst.cta":"Open instructor panel →","role.inst.cta.text":"Open instructor panel","join.title":"Join Your Classroom","join.desc":"Enter the access code provided by your instructor to link your account to the cohort.","join.code.label":"Classroom Access Code","join.submit":"Join Classroom","join.skip":"Continue without joining for now →","join.error":"Invalid access code. Please verify with your instructor.","join.dash.title":"Classroom Enrolment","join.dash.desc":"Enter your instructor's access code to join the cohort and appear on the class roster.","join.enrolled":"Enrolled with code","join.hint":"Ask your instructor for the classroom access code (e.g. ADSO331).","diag.banner":"CEFR Diagnostic · 15 items · Software Development English","diag.hint":"Select your answer to continue. Results are revealed at the end.","diag.stat.index":"Weighted Score","diag.stat.formula":"IRT Index (θ)","diag.skills":"Skill Breakdown","diag.comp":"Skill","diag.q":"Question","diag.of":"of","diag.res":"Diagnostic Assessment Complete","diag.res.badge":"✦ Assessment complete","diag.res.sub":"Your CEFR profile is calibrated from your actual responses using weighted IRT scoring.","diag.res.lead":"You answered {score} of {total} items — here is your assigned level.","diag.details.toggle":"View full diagnostic breakdown","diag.details.method":"How your level was calculated","diag.assigned":"Assigned CEFR Level","diag.scale":"Your position on the CEFR scale","diag.bands":"MCER Band Performance","diag.profile":"Your English Profile","diag.items.correct":"correct","diag.stat.raw":"Raw Score","diag.stat.weighted":"IRT-weighted","diag.stat.tri":"Item Response Theory","diag.continue":"Proceed to Dashboard","dash.welcome":"Welcome, {name}","dash.route":"Your personalised technical English learning pathway","dash.level":"CEFR Level","dash.streak":"Study Streak","dash.points":"Learning Points","dash.rank":"Classroom Rank","dash.progress":"Route Progress","dash.questions":"questions","dash.start.lesson":"Start","dash.mod":"Learning Modules","dash.m1":"Module 1: Version Control and Development Workflows","dash.m1.sub":"Reading, Listening, Speaking, and Writing · 10 assessment items","dash.continue.btn":"Open Lesson","dash.m2":"Module 2: APIs and System Integration","dash.m2.sub":"Available upon completion of Module 1.","dash.locked":"Locked","dash.logout":"Log out","dash.profile.open":"My profile","profile.title":"Your Profile","profile.sub":"Manage your personal information for ADSO Technical English.","profile.name":"Full name","profile.email":"Institutional email","profile.level":"CEFR level","profile.role":"Role","profile.role.apprentice":"Software Apprentice","profile.save":"Save changes","profile.cancel":"Cancel","profile.saved":"Profile updated successfully.","inst.title":"Instructor Dashboard","inst.sub":"Manage classrooms, monitor apprentices, and track academic progress.","inst.badge":"Instructor · ADSO","inst.create":"+ Create Classroom","inst.create.text":"Create Classroom","inst.kpi.classrooms":"Classrooms","inst.kpi.apprentices":"Apprentices","inst.kpi.avg":"Avg. per class","inst.empty.title":"No classrooms yet","inst.empty.desc":"Create your first classroom to generate an access code for apprentices.","inst.remove.confirm":"Remove this apprentice from the classroom?","inst.modal.program.default":"Software Development Analysis (ADSO)","inst.modal.title":"Create New Classroom","inst.modal.desc":"Enter the ficha number manually. The system will generate an access code for apprentices.","inst.modal.ficha":"Ficha Number","inst.modal.program":"Programme","inst.modal.cancel":"Cancel","inst.modal.confirm":"Create Classroom","inst.error.ficha":"A classroom with this ficha already exists.","inst.error.ficha.required":"Ficha number is required.","inst.expand":"View Apprentices","inst.collapse":"Hide","inst.delete":"Delete","inst.delete.confirm":"Are you sure you want to delete this classroom? This action cannot be undone.","inst.remove.apprentice":"Remove","inst.apprentices.title":"Enrolled Apprentices","inst.no.apprentices":"No apprentices enrolled in this classroom yet.","inst.col.name":"Full Name","inst.col.email":"Email","inst.col.level":"CEFR Level","inst.col.streak":"Streak","inst.col.points":"Points","inst.col.activity":"Last Activity","inst.back":"Back to Dashboard","classroom.not.found":"Classroom not found.","classroom.status.active":"Active","classroom.status.inactive":"Inactive","classroom.date.title":"Classroom Schedule & Audit","classroom.date.original":"Original creation date","classroom.date.original.hint":"Immutable record for security and traceability.","classroom.date.display":"Displayed date & time","classroom.date.modified":"Modified","classroom.date.save":"Update date","classroom.date.saved":"Date updated. Audit log recorded.","classroom.history.title":"Date change history","classroom.history.created":"Created","classroom.history.modified":"Modified","classroom.history.security":"This audit log is visible to instructors and enrolled apprentices for transparency and security.","join.inactive":"This classroom is inactive. Contact your instructor.","table.prog":"Programme","table.ficha":"Ficha","table.code":"Access Code","table.learners":"Apprentices","table.created":"Created","table.state":"Status","table.actions":"Actions","lesson.skill":"Competence","lesson.banner":"Interactive Lesson · Technical English · MCER-aligned","lesson.item.progress":"Lesson progress","lesson.route.progress":"Learning route","lesson.hint":"Select an answer to receive instant feedback.","lesson.next":"Continue →","lesson.correct":"Correct","lesson.incorrect":"Incorrect","lesson.complete":"Lesson Complete","lesson.complete.desc":"Your responses have been recorded. Review your feedback and continue your learning route.","lesson.return":"Return to Dashboard","lesson.not.found":"Lesson not found.","lesson.back":"Back to Dashboard","lesson.res.badge":"✦ Lesson complete","lesson.res.title":"Lesson Performance Report","lesson.res.lead":"You answered {score} of {total} items correctly at your assigned MCER level.","lesson.details.toggle":"View statistical breakdown","lesson.details.method":"How your lesson score was calculated","lesson.formula.note":"θ = Σ(wᵢ·uᵢ)/Σ(wᵢ) where wᵢ combines skill difficulty and discrimination weights. Skill percentages reflect correct responses per competence area (Reading, Listening, Speaking, Writing)."},"es-CO":{"nav.back":"← Volver","nav.badge":"ADSO · Inglés Técnico","footer.rights":"Todos los derechos reservados.","hero.badge":"Plataforma Especializada para Desarrolladores","hero.title.line1":"Domina el Inglés Técnico","hero.title.line2":"para el Desarrollo de Software","hero.desc":"SENALingua ayuda a los aprendices ADSO a construir competencia funcional en inglés técnico: leer documentación, interpretar mensajes de error, colaborar en equipos de habla inglesa y desenvolverse en contextos reales del desarrollo de software.","hero.badge.skill":"Reading · Listening · Speaking · Writing","hero.badge.cefr":"Diagnóstico MCER A1–B1","btn.start":"Crear Cuenta","btn.login":"Iniciar Sesión","context.title":"Diseñado para el Ecosistema del Desarrollo de Software","context.desc":"Muchos aprendices ADSO tienen dificultades para comprender documentación técnica, mensajes del sistema, APIs y comunicación profesional en inglés. SENALingua no es una aplicación de idiomas general — es una plataforma EdTech que conecta el aprendizaje lingüístico con el desempeño técnico en escenarios de software.","offer.title":"Capacidades del Producto","offer.diag":"Diagnóstico MCER","offer.diag.desc":"Clasificación inicial en A1, A2 y B1 con análisis por habilidad: Reading, Listening, Speaking y Writing en contextos técnicos.","offer.skills":"Práctica por Habilidades","offer.skills.desc":"Actividades estructuradas para comprensión de documentación, instrucciones auditivas, explicaciones técnicas y comunicación escrita profesional.","offer.modules":"Módulos Contextuales ADSO","offer.modules.desc":"Unidades temáticas alineadas al desarrollo de software: control de versiones, depuración, APIs, pull requests y entrevistas técnicas junior.","offer.instructor":"Observabilidad Docente","offer.instructor.desc":"Gestión de aulas, códigos de vinculación, monitoreo de aprendices, seguimiento de progreso y trazabilidad académica.","journey.title":"Ruta de Aprendizaje","journey.s1":"Acceso y vinculación al aula","journey.s2":"Diagnóstico MCER y asignación de nivel","journey.s3":"Ruta personalizada y práctica por módulos","journey.s4":"Retroalimentación, progreso y mejora continua","auth.create":"Crear Cuenta","auth.create.sub":"Regístrate con tu correo institucional o conéctate con Gmail, Outlook o GitHub.","auth.email":"Correo Institucional","auth.pass":"Contraseña","auth.submit":"Continuar","auth.or":"o continuar con correo","auth.oauth.gmail":"Continuar con Gmail","auth.oauth.outlook":"Continuar con Outlook","auth.oauth.github":"Continuar con GitHub","auth.oauth.hint":"Inicia sesión con tu proveedor — un clic.","auth.login.title":"Iniciar Sesión","auth.login.sub":"El sistema reconocerá si estás registrado como aprendiz o instructor.","auth.login.submit":"Iniciar Sesión","auth.have.account":"¿Ya tienes cuenta?","auth.go.login":"Inicia sesión aquí","auth.no.account":"¿No tienes cuenta?","auth.go.register":"Regístrate aquí","auth.error.already":"Este correo ya está registrado. Por favor inicia sesión.","auth.error.not.registered":"No hay cuenta con este correo. Por favor regístrate primero.","auth.error.password":"Por favor ingresa tu contraseña.","auth.error.wrong_password":"Contraseña incorrecta. Inténtalo de nuevo.","auth.error.password_short":"La contraseña debe tener al menos 8 caracteres.","auth.error.password_mismatch":"Las contraseñas no coinciden.","auth.error.invalid_reset_code":"Código de recuperación inválido. Verifica e intenta de nuevo.","auth.error.reset_expired":"Este código ha expirado. Solicita uno nuevo.","auth.error.generic":"Algo salió mal. Intenta de nuevo.","auth.forgot.link":"¿Olvidaste tu contraseña?","auth.forgot.title":"Recuperar Contraseña","auth.forgot.sub":"Ingresa tu correo institucional y te enviaremos un código de recuperación.","auth.forgot.submit":"Enviar Código de Recuperación","auth.forgot.sent.title":"Código Enviado","auth.forgot.sent.sub":"Usa el código de 6 dígitos para establecer una nueva contraseña. (Simulado para demo)","auth.forgot.code.label":"Tu código de recuperación","auth.forgot.continue":"Establecer Nueva Contraseña","auth.forgot.back":"Volver al inicio de sesión","auth.reset.title":"Nueva Contraseña","auth.reset.sub":"Ingresa el código recibido y elige una contraseña segura.","auth.reset.code":"Código de Recuperación","auth.reset.new_pass":"Nueva Contraseña","auth.reset.confirm_pass":"Confirmar Contraseña","auth.reset.submit":"Actualizar Contraseña","auth.reset.success.title":"Contraseña Actualizada","auth.reset.success.sub":"Tu contraseña se cambió correctamente. Ya puedes iniciar sesión.","auth.reset.success.cta":"Ir a Iniciar Sesión","auth.register.success.title":"¡Registro Exitoso!","auth.register.success.sub.apprentice":"Tu cuenta de aprendiz está lista. Ahora puedes realizar el diagnóstico MCER e iniciar tu ruta de inglés técnico.","auth.register.success.sub.instructor":"Tu cuenta de instructor está lista. Ya puedes gestionar aulas y monitorear a tus aprendices.","auth.register.success.cta.apprentice":"Iniciar Diagnóstico MCER","auth.register.success.cta.instructor":"Ir al Panel de Instructor","auth.register.success.badge":"Cuenta verificada","role.heading":"Selecciona tu Rol","role.badge":"✦ Elige tu camino","role.sub":"Elige cómo utilizarás la plataforma dentro del entorno de formación ADSO.","role.learn":"Aprendiz de Software","role.learn.tag":"Aprendiz","role.learn.sub":"Accede al diagnóstico, rutas personalizadas y módulos de inglés técnico.","role.learn.cta":"Iniciar ruta de aprendizaje →","role.learn.cta.text":"Iniciar ruta de aprendizaje","role.inst":"Instructor","role.inst.tag":"Formador","role.inst.sub":"Gestiona aulas, comparte códigos de vinculación y monitorea el progreso.","role.inst.cta":"Abrir panel del instructor →","role.inst.cta.text":"Abrir panel del instructor","join.title":"Unirse al Aula","join.desc":"Ingresa el código de acceso proporcionado por tu instructor para vincular tu cuenta a la cohorte.","join.code.label":"Código de Acceso al Aula","join.submit":"Unirse al Aula","join.skip":"Continuar sin unirse por ahora →","join.error":"Código de acceso inválido. Verifica con tu instructor.","join.dash.title":"Vinculación al Aula","join.dash.desc":"Ingresa el código de tu instructor para unirte a la cohorte y aparecer en el listado.","join.enrolled":"Vinculado con código","join.hint":"Solicita a tu instructora el código de acceso al aula (ej. ADSO331).","diag.banner":"Diagnóstico MCER · 15 ítems · Inglés para Desarrollo de Software","diag.hint":"Selecciona tu respuesta para continuar. Los resultados se revelan al final.","diag.stat.index":"Puntaje Ponderado","diag.stat.formula":"Índice TRI (θ)","diag.skills":"Desglose por Habilidad","diag.comp":"Habilidad","diag.q":"Pregunta","diag.of":"de","diag.res":"Diagnóstico Completado","diag.res.badge":"✦ Evaluación completada","diag.res.sub":"Tu perfil MCER se calibra a partir de tus respuestas reales mediante puntuación TRI ponderada.","diag.res.lead":"Respondiste {score} de {total} ítems — este es tu nivel asignado.","diag.details.toggle":"Ver desglose completo del diagnóstico","diag.details.method":"Cómo se calculó tu nivel","diag.assigned":"Nivel MCER Asignado","diag.scale":"Tu posición en la escala MCER","diag.bands":"Desempeño por Banda MCER","diag.profile":"Tu Perfil de Inglés","diag.items.correct":"correctas","diag.stat.raw":"Puntaje Bruto","diag.stat.weighted":"Ponderado TRI","diag.stat.tri":"Teoría de Respuesta al Ítem","diag.continue":"Ir al Panel","dash.welcome":"Bienvenido, {name}","dash.route":"Tu ruta personalizada de aprendizaje en inglés técnico","dash.level":"Nivel MCER","dash.streak":"Racha de Estudio","dash.points":"Puntos de Aprendizaje","dash.rank":"Ranking del Aula","dash.progress":"Progreso de Ruta","dash.questions":"preguntas","dash.start.lesson":"Iniciar","dash.mod":"Módulos de Aprendizaje","dash.m1":"Módulo 1: Control de Versiones y Flujos de Desarrollo","dash.m1.sub":"Reading, Listening, Speaking y Writing · 10 ítems de evaluación","dash.continue.btn":"Abrir Lección","dash.m2":"Módulo 2: APIs e Integración de Sistemas","dash.m2.sub":"Disponible al completar el Módulo 1.","dash.locked":"Bloqueado","dash.logout":"Salir","dash.profile.open":"Mi perfil","profile.title":"Tu Perfil","profile.sub":"Administra tu información personal en ADSO Inglés Técnico.","profile.name":"Nombre completo","profile.email":"Correo institucional","profile.level":"Nivel MCER","profile.role":"Rol","profile.role.apprentice":"Aprendiz de Software","profile.save":"Guardar cambios","profile.cancel":"Cancelar","profile.saved":"Perfil actualizado correctamente.","inst.title":"Panel del Instructor","inst.sub":"Gestiona aulas, monitorea aprendices y realiza seguimiento académico.","inst.badge":"Instructor · ADSO","inst.create":"+ Crear Aula","inst.create.text":"Crear Aula","inst.kpi.classrooms":"Aulas","inst.kpi.apprentices":"Aprendices","inst.kpi.avg":"Prom. por ficha","inst.empty.title":"Aún no hay aulas","inst.empty.desc":"Crea tu primera aula para generar un código de acceso para los aprendices.","inst.remove.confirm":"¿Eliminar este aprendiz del aula?","inst.modal.program.default":"Análisis y Desarrollo de Software (ADSO)","inst.modal.title":"Crear Nueva Aula","inst.modal.desc":"Ingresa el número de ficha manualmente. El sistema generará un código de acceso para los aprendices.","inst.modal.ficha":"Número de Ficha","inst.modal.program":"Programa de Formación","inst.modal.cancel":"Cancelar","inst.modal.confirm":"Crear Aula","inst.error.ficha":"Ya existe un aula con esta ficha.","inst.error.ficha.required":"El número de ficha es obligatorio.","inst.expand":"Ver Aprendices","inst.collapse":"Ocultar","inst.delete":"Eliminar","inst.delete.confirm":"¿Está seguro de eliminar esta ficha? Esta acción no se puede deshacer.","inst.remove.apprentice":"Eliminar","inst.apprentices.title":"Aprendices Inscritos","inst.no.apprentices":"Aún no hay aprendices inscritos en esta ficha.","inst.col.name":"Nombre Completo","inst.col.email":"Correo","inst.col.level":"Nivel MCER","inst.col.streak":"Racha","inst.col.points":"Puntos","inst.col.activity":"Última Actividad","inst.back":"Volver al Panel","classroom.not.found":"Aula no encontrada.","classroom.status.active":"Activa","classroom.status.inactive":"Inactiva","classroom.date.title":"Programación y Auditoría del Aula","classroom.date.original":"Fecha de creación original","classroom.date.original.hint":"Registro inmutable por seguridad y trazabilidad.","classroom.date.display":"Fecha y hora mostrada","classroom.date.modified":"Modificada","classroom.date.save":"Actualizar fecha","classroom.date.saved":"Fecha actualizada. Registro de auditoría guardado.","classroom.history.title":"Historial de cambios de fecha","classroom.history.created":"Creación","classroom.history.modified":"Modificación","classroom.history.security":"Este registro de auditoría es visible para instructores y aprendices inscritos por transparencia y seguridad.","join.inactive":"Esta aula está inactiva. Contacta a tu instructor.","table.prog":"Programa","table.ficha":"Ficha","table.code":"Código de Acceso","table.learners":"Aprendices","table.created":"Fecha de Creación","table.state":"Estado","table.actions":"Acciones","lesson.skill":"Competencia","lesson.banner":"Lección Interactiva · Inglés Técnico · Alineada al MCER","lesson.item.progress":"Progreso de la lección","lesson.route.progress":"Ruta de aprendizaje","lesson.hint":"Selecciona una respuesta para recibir retroalimentación inmediata.","lesson.next":"Continuar →","lesson.correct":"Correcto","lesson.incorrect":"Incorrecto","lesson.complete":"Lección Completada","lesson.complete.desc":"Tus respuestas han sido registradas. Revisa la retroalimentación y continúa tu ruta.","lesson.return":"Volver al Panel","lesson.not.found":"Lección no encontrada.","lesson.back":"Volver al Panel","lesson.res.badge":"✦ Lección completada","lesson.res.title":"Informe de Desempeño de la Lección","lesson.res.lead":"Respondiste {score} de {total} ítems correctamente en tu nivel MCER asignado.","lesson.details.toggle":"Ver desglose estadístico","lesson.details.method":"Cómo se calculó tu puntaje de lección","lesson.formula.note":"θ = Σ(wᵢ·uᵢ)/Σ(wᵢ) donde wᵢ combina dificultad y discriminación por habilidad. Los porcentajes reflejan respuestas correctas por competencia (Reading, Listening, Speaking, Writing)."}};function r(t,e={}){var i,n;const s=d.getState().lang;let a=((i=he[s])==null?void 0:i[t])??((n=he["en-GB"])==null?void 0:n[t])??t;return Object.entries(e).forEach(([o,l])=>{a=a.replace(new RegExp(`\\{${o}\\}`,"g"),String(l))}),a}function K(t=document){t.querySelectorAll("[data-i18n]:not([data-i18n-skip])").forEach(e=>{if(!(e instanceof HTMLElement))return;const s=e.getAttribute("data-i18n");if(!s)return;const a=e.getAttribute("data-i18n-params");let i={};if(a)try{i=JSON.parse(a)}catch{}const n=r(s,i);e.hasAttribute("data-i18n-html")?e.innerHTML=n:e.textContent=n})}const Qe={plus:'<path d="M12 5v14M5 12h14"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',trash:'<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',chevronDown:'<path d="M6 9l6 6 6-6"/>',chevronUp:'<path d="M18 15l-6-6-6 6"/>',arrowLeft:'<path d="M19 12H5M12 19l-7-7 7-7"/>',classroom:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8M8 11h6"/>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',layers:'<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',chart:'<path d="M18 20V10M12 20V4M6 20v-6"/>',flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',star:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',trophy:'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>',trendUp:'<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',play:'<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',check:'<path d="M20 6L9 17l-5-5"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',door:'<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561z"/>',route:'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',sparkles:'<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v5h5"/><path d="M12 7v5l3 3"/>',search:'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',zap:'<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'},me=new Set(["play"]);function u(t,e="ui-icon"){const s=Qe[t];if(!s)return"";const a=me.has(t)?"currentColor":"none",i=me.has(t)?"none":"currentColor";return`<svg class="${e}" viewBox="0 0 24 24" fill="${a}" stroke="${i}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`}const Xe={R:"book",L:"headphones",S:"mic",W:"pen"};function Q(t,e="ui-icon ui-icon--xs"){const s=Xe[t];return s?u(s,e):""}function Ze(t="hub-skill-chips"){return`
        <span class="${t}" aria-label="Reading, Listening, Speaking, Writing">
            <span class="hub-skill-chip" title="Reading">${Q("R")}</span>
            <span class="hub-skill-chip" title="Listening">${Q("L")}</span>
            <span class="hub-skill-chip" title="Speaking">${Q("S")}</span>
            <span class="hub-skill-chip" title="Writing">${Q("W")}</span>
        </span>
    `}const ge=['<span class="term-kw">async</span> <span class="term-str">"await"</span>','<span class="term-kw">function</span> debug()','<span class="term-kw">const</span> API_KEY','<span class="term-str">"pull request"</span>','<span class="term-kw">class</span> Developer','<span class="term-str">"merge conflict"</span>','<span class="term-kw">try</span> / <span class="term-kw">catch</span>','<span class="term-str">"code review"</span>','<span class="term-kw">export</span> default','<span class="term-str">"unit test"</span>'],et=[{key:"diag",icon:"clipboard",color:"capability-green"},{key:"skills",icon:"target",color:"capability-orange"},{key:"modules",icon:"layers",color:"capability-teal"},{key:"instructor",icon:"chart",color:"capability-yellow"}],tt=[{key:"s1",icon:"door"},{key:"s2",icon:"clipboard"},{key:"s3",icon:"route"},{key:"s4",icon:"trendUp"}];function st(){const e=[...ge,...ge].map(s=>`<span class="tech-term">${s}</span>`).join("");return`
        <div class="tech-marquee-wrap" aria-hidden="true">
            <div class="tech-marquee">
                <div class="tech-marquee-track">${e}</div>
                <div class="tech-marquee-track">${e}</div>
            </div>
        </div>
    `}function at(t){const e=`
        <section class="hero-grid">
            <div class="hero-content">
                <span class="hero-tag">
                    ${u("sparkles","ui-icon ui-icon--xs")}
                    <span data-i18n="hero.badge">${r("hero.badge")}</span>
                </span>
                <h1 class="hero-main-title">
                    <span class="hero-line" data-i18n="hero.title.line1">${r("hero.title.line1")}</span>
                    <span class="hero-line hero-accent" data-i18n="hero.title.line2">${r("hero.title.line2")}</span>
                </h1>
                <p class="hero-desc" data-i18n="hero.desc">${r("hero.desc")}</p>
                <div class="hero-cta">
                    <button id="go-register" class="btn-register-action btn-with-icon">
                        ${u("zap","ui-icon ui-icon--sm")}
                        <span data-i18n="btn.start">${r("btn.start")}</span>
                    </button>
                    <button id="go-login" class="btn-login-action btn-with-icon">
                        ${u("door","ui-icon ui-icon--sm")}
                        <span data-i18n="btn.login">${r("btn.login")}</span>
                    </button>
                </div>
            </div>
            <div class="art-shell-luxury">
                <div class="hero-visual-core">
                    <div class="code-window">
                        <div class="code-window-bar">
                            <span></span><span></span><span></span>
                            <span class="code-window-title">developer.js</span>
                        </div>
                        <pre class="code-snippet"><span class="cm">// SENALingua — your path to fluency</span>
<span class="kw">const</span> developer = {
  name: <span class="str">"ADSO apprentice"</span>,
  skill: <span class="str">"technical English"</span>,
  context: <span class="str">"SENA"</span>,
  level: <span class="fn">upgrade</span>(<span class="str">"A1"</span>, <span class="str">"B1"</span>),
  speak: <span class="kw">async</span> () => <span class="kw">await</span> <span class="fn">practice</span>()
};<span class="cursor"></span></pre>
                    </div>
                </div>
                <div class="floating-badge badge-top">
                    ${u("target","ui-icon ui-icon--xs")}
                    <span data-i18n="hero.badge.skill">${r("hero.badge.skill")}</span>
                </div>
                <div class="floating-badge badge-bottom">
                    ${u("clipboard","ui-icon ui-icon--xs")}
                    <span data-i18n="hero.badge.cefr">${r("hero.badge.cefr")}</span>
                </div>
            </div>
        </section>

        ${st()}

        <section class="section-block">
            <div class="section-header">
                <h2 data-i18n="context.title">${r("context.title")}</h2>
                <p data-i18n="context.desc">${r("context.desc")}</p>
            </div>
        </section>

        <section id="section-offer" class="section-block">
            <span class="section-eyebrow">
                ${u("layers","ui-icon ui-icon--xs")}
                Platform
            </span>
            <h2 class="section-title" data-i18n="offer.title">${r("offer.title")}</h2>
            <div class="capabilities-grid stagger-children">
                ${et.map(a=>`
                    <article class="capability-card ${a.color}">
                        <div class="capability-icon">${u(a.icon,"ui-icon")}</div>
                        <h3 data-i18n="offer.${a.key}">${r(`offer.${a.key}`)}</h3>
                        <p data-i18n="offer.${a.key}.desc">${r(`offer.${a.key}.desc`)}</p>
                    </article>
                `).join("")}
            </div>
        </section>

        <section class="section-block journey-section">
            <span class="section-eyebrow">
                ${u("route","ui-icon ui-icon--xs")}
                Process
            </span>
            <h2 class="section-title" data-i18n="journey.title">${r("journey.title")}</h2>
            <div class="journey-steps stagger-children">
                ${tt.map((a,i)=>`
                    <div class="journey-step">
                        <span class="journey-step-icon" aria-hidden="true">
                            ${u(a.icon,"ui-icon ui-icon--sm")}
                        </span>
                        <em class="journey-step-num">0${i+1}</em>
                        <p data-i18n="journey.${a.key}">${r(`journey.${a.key}`)}</p>
                    </div>
                `).join("")}
            </div>
        </section>
    `,s=document.createElement("div");return s.className="fade-in",s.innerHTML=e,s.querySelector("#go-register").addEventListener("click",()=>t("register")),s.querySelector("#go-login").addEventListener("click",()=>t("login")),s}const Re="senaligua_accounts_v4",Ie="senaligua_reset_v4",it="Sena2026!",nt=900*1e3,ot=8;function x(t){return t.trim().toLowerCase()}function ce(){try{const t=localStorage.getItem(Re);return t?JSON.parse(t):{}}catch{return{}}}function Me(t){try{localStorage.setItem(Re,JSON.stringify(t))}catch{}}function fe(t){return t.trim().length>=ot}function rt(t,e,s=!1){const a=t||(s?it:void 0);return a?a===e:!1}function be(){try{const t=localStorage.getItem(Ie);return t?JSON.parse(t):{}}catch{return{}}}function ee(t){try{localStorage.setItem(Ie,JSON.stringify(t))}catch{}}function lt(){return String(Math.floor(1e5+Math.random()*9e5))}function j(t){const e=x(t);return ce()[e]||null}function H(t,e){const s=ce(),a=x(t),i=new Date().toISOString(),n=s[a]||{};return s[a]={...n,...e,email:a,updatedAt:i,registeredAt:n.registeredAt||i},Me(s),s[a]}function ve(t){return{assignedLevel:t.assignedLevel,diagnosticCompleted:t.diagnosticCompleted,diagnosticStep:t.diagnosticStep,diagnosticAnswers:t.diagnosticAnswers,lessonProgress:t.lessonProgress,learnerStats:t.learnerStats,progressPercent:t.progressPercent,enrolledClassroomCode:t.enrolledClassroomCode}}function z(t){const e=x(t),s=Ye.find(n=>n.email===e);if(s)return{email:s.email,name:s.name,role:s.role,assignedLevel:s.assignedLevel??null,diagnosticCompleted:!!s.assignedLevel&&s.role==="apprentice"};const i=e.split("@")[0].replace(/\./g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ");return e.includes("instructor")||e.includes("docente")?{email:e,name:i,role:"instructor",assignedLevel:null,diagnosticCompleted:!1}:null}function ct(t){const e=x(t),s=j(e);if(s!=null&&s.role)return{email:s.email,name:s.name,role:s.role,assignedLevel:s.assignedLevel||null,diagnosticCompleted:!!s.diagnosticCompleted};const a=z(e);if(a)return a;const n=e.split("@")[0].replace(/\./g," ").split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ");return{email:e,name:n,role:null,assignedLevel:null,diagnosticCompleted:!1}}function dt(t,e){const s=`${t.toLowerCase()}@sena.edu.co`,a=j(s),i=z(s);return e==="register"?a||i?{user:a||i,exists:!0}:{user:{email:s,name:t,role:null,assignedLevel:null},exists:!1}:{user:a?{email:a.email,name:a.name,role:a.role||null,assignedLevel:a.assignedLevel||null,diagnosticCompleted:!!a.diagnosticCompleted}:i||{email:s,name:t,role:null,assignedLevel:null},exists:!!(a||i)}}function ye(t,e,s){if(!e||!t)return null;const a=s.find(n=>n.code===e);if(!a)return null;const i=t.trim().toLowerCase();return a.apprentices.some(n=>n.email===i)?e:null}function A(t){return new Promise(e=>{setTimeout(()=>e(t),Ee.apiMockDelayMs)})}const C={resolveUserFromDatabase:ct,getAccount:j,upsertAccount:H,isRegistered(t){const e=x(t);return!!(j(e)||z(e))},authenticate(t,e){const s=x(t);if(!e.trim())return A({success:!1,message:"password"});const a=j(s),i=z(s);if(!a&&!i)return A({success:!1,message:"not_registered"});const o=!!!(a!=null&&a.password)&&!!i;return rt(a==null?void 0:a.password,e,o)?A(a?{success:!0,user:{email:a.email,name:a.name,role:a.role||null,assignedLevel:a.assignedLevel||null,diagnosticCompleted:!!a.diagnosticCompleted},session:a.session||null}:{success:!0,user:i,session:null}):A({success:!1,message:"wrong_password"})},oauth(t,e="login"){const{user:s,exists:a}=dt(t,e);if(e==="login"&&!a)return A({success:!1,message:"not_registered"});if(e==="register"&&a)return A({success:!1,message:"already_registered",user:s});const i=j(s.email);return A({success:!0,user:s,provider:t,session:(i==null?void 0:i.session)||null})},registerWithEmail(t,e){const s=x(t);if(!fe(e))return A({success:!1,message:"password_too_short"});if(j(s))return A({success:!1,message:"already_registered"});const a=z(s),i=(a==null?void 0:a.name)||s.split("@")[0].replace(/\./g," ");return H(s,{name:i,role:null,assignedLevel:null,password:e,diagnosticCompleted:!1}),A({success:!0,user:{email:s,name:i,role:null,assignedLevel:null}})},requestPasswordReset(t){const e=x(t);if(!!!(j(e)||z(e)))return A({success:!1,message:"not_registered"});const a=lt(),i=be();return i[e]={code:a,expiresAt:Date.now()+nt},ee(i),A({success:!0,code:a})},resetPassword(t,e,s,a){const i=x(t);if(!fe(s))return A({success:!1,message:"password_too_short"});if(s!==a)return A({success:!1,message:"password_mismatch"});const n=be(),o=n[i];if(!o||o.code!==e.trim())return A({success:!1,message:"invalid_reset_code"});if(Date.now()>o.expiresAt)return delete n[i],ee(n),A({success:!1,message:"reset_expired"});const l=z(i),c=j(i);return H(i,{name:(c==null?void 0:c.name)||(l==null?void 0:l.name)||i,role:(c==null?void 0:c.role)||(l==null?void 0:l.role)||null,assignedLevel:(c==null?void 0:c.assignedLevel)??(l==null?void 0:l.assignedLevel)??null,password:s,diagnosticCompleted:(c==null?void 0:c.diagnosticCompleted)??(l==null?void 0:l.diagnosticCompleted)??!1}),delete n[i],ee(n),A({success:!0})},commitRole(t){const e=d.getState().user;if(!(e!=null&&e.email))return null;const s=H(e.email,{name:e.name,role:t,assignedLevel:t==="instructor"?null:e.assignedLevel||null,diagnosticCompleted:t==="instructor"});return d.setState({user:{...e,role:t,assignedLevel:s.assignedLevel},...t==="instructor"?{diagnosticCompleted:!0,assignedLevel:null,enrolledClassroomCode:null}:{enrolledClassroomCode:null}}),s},syncAccountFromState(){const t=d.getState(),e=t.user;!(e!=null&&e.email)||!e.role||H(e.email,{name:e.name,role:e.role,assignedLevel:t.assignedLevel,diagnosticCompleted:t.diagnosticCompleted,session:ve(t)})},persistSessionBeforeLogout(){const t=d.getState(),e=t.user;!(e!=null&&e.email)||!e.role||H(e.email,{name:e.name,role:e.role,assignedLevel:t.assignedLevel,diagnosticCompleted:t.diagnosticCompleted,session:ve(t)})},routeAfterRegister(t,e,s={}){H(t.email,{name:t.name,role:null,assignedLevel:null,diagnosticCompleted:!1}),d.setState({user:{...t,role:null},assignedLevel:null,diagnosticCompleted:!1,diagnosticStep:0,diagnosticAnswers:[],enrolledClassroomCode:null,lastAuthMeta:s}),e("role-selection")},routeAfterRegisterSuccess(t,e){if(t==="instructor"){e("instructor-dashboard");return}e("diagnostic")},routeAfterLogin(t,e,s={},a=null){const i=d.getState(),n=t.assignedLevel||(a==null?void 0:a.assignedLevel)||i.assignedLevel,o=t.diagnosticCompleted||(a==null?void 0:a.diagnosticCompleted)||i.diagnosticCompleted||!!n,l=a?{assignedLevel:a.assignedLevel??n,diagnosticCompleted:a.diagnosticCompleted??o,diagnosticStep:a.diagnosticStep??0,diagnosticAnswers:a.diagnosticAnswers??[],lessonProgress:a.lessonProgress??{},learnerStats:a.learnerStats??i.learnerStats,progressPercent:a.progressPercent??0,enrolledClassroomCode:ye(t.email,a.enrolledClassroomCode,i.classrooms)}:{enrolledClassroomCode:ye(t.email,i.enrolledClassroomCode,i.classrooms)};if(d.setState({user:{...t,assignedLevel:t.role==="apprentice"?n:null},lastAuthMeta:s,...l}),t.role==="instructor"){e("instructor-dashboard");return}if(t.role==="apprentice"){if(o){e("apprentice-dashboard");return}e("diagnostic");return}e("role-selection")},logout(){C.persistSessionBeforeLogout(),d.reset()},updateProfile({name:t,email:e}){const s=d.getState().user;if(!s)return null;const a=s.email,i={...s,...t!==void 0?{name:t.trim()}:{},...e!==void 0?{email:x(e)}:{}};if(e!==void 0&&x(e)!==a){const n=ce(),o=x(a),l=x(e);n[o]&&(n[l]={...n[o],...i,email:l},delete n[o],Me(n))}else H(i.email,{name:i.name});return d.setState({user:i}),C.syncAccountFromState(),i}},ut={Gmail:`<svg class="oauth-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#EA4335" d="M5.2 4h13.6A1.2 1.2 0 0 1 20 5.2v13.6A1.2 1.2 0 0 1 18.8 20H5.2A1.2 1.2 0 0 1 4 18.8V5.2A1.2 1.2 0 0 1 5.2 4z"/>
    <path fill="#fff" d="M12 13.1 4.6 6.7V18h14.8V6.7L12 13.1z"/>
    <path fill="#34A853" d="M4 5.8 12 12.2l8-6.4V5.2A1.2 1.2 0 0 0 18.8 4H5.2A1.2 1.2 0 0 0 4 5.2v.6z"/>
    <path fill="#FBBC05" d="M4 18.8V6.7l8 6.4-8 5.7z"/>
    <path fill="#4285F4" d="M20 6.7V18.8A1.2 1.2 0 0 1 18.8 20h.4L12 13.1 20 6.7z"/>
  </svg>`,Outlook:`<svg class="oauth-icon" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="11" height="14" rx="1.5" fill="#0078D4"/>
    <path fill="#50A0FF" d="M14 7.5h6.2c.7 0 1.3.6 1.3 1.3v10.4c0 .7-.6 1.3-1.3 1.3H14V7.5z"/>
    <ellipse cx="8.5" cy="12" rx="3.2" ry="3.8" fill="#fff"/>
    <path fill="#0078D4" d="M8.5 9.4c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6-2.6-1.2-2.6-2.6 1.2-2.6 2.6-2.6z"/>
  </svg>`,GitHub:`<svg class="oauth-icon oauth-icon--github" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
  </svg>`};function pt(t){const e=ut[t];return e?`<span class="oauth-icon-slot" aria-hidden="true">${e}</span>`:""}const ht={apprentice:`<svg class="role-memoji" viewBox="0 0 88 88" width="88" height="88" aria-hidden="true">
    <defs>
      <linearGradient id="app-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#dcfce7"/>
        <stop offset="100%" stop-color="#ccfbf1"/>
      </linearGradient>
    </defs>
    <circle cx="44" cy="44" r="42" fill="url(#app-bg)" stroke="#86efac" stroke-width="2"/>
    <ellipse cx="44" cy="78" rx="24" ry="8" fill="#bbf7d0" opacity="0.55"/>
    <circle cx="44" cy="38" r="18" fill="#fde68a"/>
    <path d="M26 34c2-8 10-12 18-12s16 4 18 12" fill="#422006"/>
    <circle cx="37" cy="38" r="2.2" fill="#1f2937"/>
    <circle cx="51" cy="38" r="2.2" fill="#1f2937"/>
    <path d="M38 46c2 2 10 2 12 0" stroke="#b45309" stroke-width="2" stroke-linecap="round" fill="none"/>
    <rect x="28" y="54" width="32" height="22" rx="10" fill="#16a34a"/>
    <path d="M34 54h20l-3-8H37l-3 8z" fill="#15803d"/>
    <rect x="40" y="60" width="8" height="6" rx="1" fill="#f0fdf4"/>
  </svg>`,instructor:`<svg class="role-memoji" viewBox="0 0 88 88" width="88" height="88" aria-hidden="true">
    <defs>
      <linearGradient id="inst-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fef3c7"/>
        <stop offset="100%" stop-color="#fde68a"/>
      </linearGradient>
    </defs>
    <circle cx="44" cy="44" r="42" fill="url(#inst-bg)" stroke="#fcd34d" stroke-width="2"/>
    <ellipse cx="44" cy="78" rx="24" ry="8" fill="#fde68a" opacity="0.55"/>
    <circle cx="44" cy="38" r="18" fill="#fdba74"/>
    <path d="M24 36c3-6 12-10 20-10s17 4 20 10" fill="#431407"/>
    <circle cx="36" cy="38" r="2.2" fill="#1f2937"/>
    <circle cx="52" cy="38" r="2.2" fill="#1f2937"/>
    <path d="M38 46c3 2 9 2 12 0" stroke="#9a3412" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M30 54h28l-4 22H34l-4-22z" fill="#1d4ed8"/>
    <path d="M34 54l8-10 8 10" fill="#fff"/>
    <rect x="38" y="62" width="12" height="8" rx="2" fill="#dbeafe"/>
    <circle cx="58" cy="30" r="6" fill="#fff" stroke="#93c5fd" stroke-width="1.5"/>
    <path d="M55 30h6M58 27v6" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`};function $e(t){return`<div class="role-memoji-wrap" aria-hidden="true">
    <div class="role-memoji-glow"></div>
    ${ht[t]}
  </div>`}function S(t,e){return t.querySelector(e)}function O(t,e){return t.querySelectorAll(e)}function g(t,e){const s=t.querySelector(e);if(!s)throw new Error(`Element not found: ${e}`);return s}function J(t){return`
        <div class="auth-scene" aria-hidden="false">
            <div class="auth-orb auth-orb--a"></div>
            <div class="auth-orb auth-orb--b"></div>
            <div class="auth-orb auth-orb--c"></div>
            <div class="auth-card-frame">
                <div class="auth-card-glow"></div>
                <div class="auth-card card-premium-luxury stagger-children">
                    ${t}
                </div>
            </div>
        </div>
    `}function Pe(){return`
        <div class="oauth-container">
            ${[{id:"Gmail",label:"auth.oauth.gmail",mod:"gmail"},{id:"Outlook",label:"auth.oauth.outlook",mod:"outlook"},{id:"GitHub",label:"auth.oauth.github",mod:"github"}].map(e=>`
                <button type="button" class="btn-oauth btn-oauth--${e.mod} oauth-action-trigger" data-provider="${e.id}">
                    ${pt(e.id)}
                    <span class="btn-oauth-label" data-i18n="${e.label}">${r(e.label)}</span>
                    <span class="btn-oauth-arrow" aria-hidden="true">→</span>
                </button>
            `).join("")}
        </div>
        <p class="auth-oauth-hint" data-i18n="auth.oauth.hint">${r("auth.oauth.hint")}</p>
    `}function _(t,e,s,a,i,n){const o=n?` minlength="${n}"`:"";return`
        <div class="auth-field">
            <label for="${t}" data-i18n="${e}">${r(e)}</label>
            <div class="auth-input-wrap">
                <input type="${s}" class="input-field auth-input" required id="${t}" placeholder="${a}" autocomplete="${i}"${o}>
            </div>
        </div>
    `}function G(t){return r({already_registered:"auth.error.already",not_registered:"auth.error.not.registered",wrong_password:"auth.error.wrong_password",password:"auth.error.password",password_too_short:"auth.error.password_short",password_mismatch:"auth.error.password_mismatch",invalid_reset_code:"auth.error.invalid_reset_code",reset_expired:"auth.error.reset_expired"}[t]??"auth.error.generic")}function U(t,e){var s;O(t,'.oauth-action-trigger, .auth-form button[type="submit"]').forEach(a=>{a.disabled=e,e?a.setAttribute("aria-busy","true"):a.removeAttribute("aria-busy")}),(s=S(t,".auth-card"))==null||s.classList.toggle("auth-card--loading",e)}function De(t,e,s,a){O(t,".oauth-action-trigger").forEach(i=>{i.addEventListener("click",async()=>{U(t,!0);try{const n=i.dataset.provider??"",o=await C.oauth(n,e);if(o.success===!1){a==null||a(o);return}s(o.user,{provider:o.provider,session:o.session})}finally{U(t,!1)}})})}function Y(t,e,s){const a=S(t,e);a&&(a.hidden=!1,a.textContent=s)}function mt(t){var a;const e=document.createElement("div");e.className="auth-shell fade-in",e.innerHTML=J(`
        <div class="auth-card-header">
            <span class="auth-pill">✦ ADSO · Technical English</span>
            <h2 data-i18n="auth.create">${r("auth.create")}</h2>
            <p class="auth-subtitle" data-i18n="auth.create.sub">${r("auth.create.sub")}</p>
        </div>
        ${Pe()}
        <div class="auth-divider"><span data-i18n="auth.or">${r("auth.or")}</span></div>
        <form id="auth-form-runtime" class="auth-form">
            ${_("auth-email-node","auth.email","email","developer@misena.edu.co","email")}
            ${_("auth-pass-node","auth.pass","password","••••••••••••","new-password",8)}
            <p id="register-error" class="form-error" hidden></p>
            <button type="submit" class="btn-register-action btn-full auth-submit" data-i18n="auth.submit">
                <span>${r("auth.submit")}</span>
                <span class="auth-submit-icon" aria-hidden="true">→</span>
            </button>
        </form>
        <p class="auth-switch">
            <span data-i18n="auth.have.account">${r("auth.have.account")}</span>
            <button type="button" class="auth-switch-link" id="go-to-login" data-i18n="auth.go.login">${r("auth.go.login")}</button>
        </p>
    `);const s=(i,n={})=>C.routeAfterRegister(i,t,n);return De(e,"register",s,i=>{Y(e,"#register-error",G(i.message))}),(a=S(e,"#go-to-login"))==null||a.addEventListener("click",()=>t("login")),g(e,"#auth-form-runtime").addEventListener("submit",async i=>{i.preventDefault(),U(e,!0);const n=g(e,"#register-error");n.hidden=!0;try{const o=g(e,"#auth-email-node").value,l=g(e,"#auth-pass-node").value,c=await C.registerWithEmail(o,l);if(c.success===!1){n.hidden=!1,n.textContent=G(c.message);return}s(c.user)}finally{U(e,!1)}}),e}function gt(t){var a,i;const e=document.createElement("div");e.className="auth-shell fade-in",e.innerHTML=J(`
        <div class="auth-card-header">
            <span class="auth-pill">✦ SENALingua</span>
            <h2 data-i18n="auth.login.title">${r("auth.login.title")}</h2>
            <p class="auth-subtitle" data-i18n="auth.login.sub">${r("auth.login.sub")}</p>
        </div>
        ${Pe()}
        <div class="auth-divider"><span data-i18n="auth.or">${r("auth.or")}</span></div>
        <form id="login-form" class="auth-form">
            ${_("login-email","auth.email","email","instructor@sena.edu.co","email")}
            ${_("login-pass","auth.pass","password","••••••••••••","current-password")}
            <p class="auth-forgot-row">
                <button type="button" class="auth-forgot-link" id="go-forgot-password" data-i18n="auth.forgot.link">${r("auth.forgot.link")}</button>
            </p>
            <p id="login-error" class="form-error" hidden></p>
            <button type="submit" class="btn-login-action btn-full auth-submit auth-submit--login" data-i18n="auth.login.submit">
                <span>${r("auth.login.submit")}</span>
                <span class="auth-submit-icon" aria-hidden="true">→</span>
            </button>
        </form>
        <p class="auth-switch">
            <span data-i18n="auth.no.account">${r("auth.no.account")}</span>
            <button type="button" class="auth-switch-link" id="go-to-register" data-i18n="auth.go.register">${r("auth.go.register")}</button>
        </p>
    `);const s=(n,o={})=>C.routeAfterLogin(n,t,o,o.session??null);return De(e,"login",(n,o)=>s(n,o),n=>{Y(e,"#login-error",G(n.message))}),(a=S(e,"#go-to-register"))==null||a.addEventListener("click",()=>t("register")),(i=S(e,"#go-forgot-password"))==null||i.addEventListener("click",()=>t("forgot-password")),g(e,"#login-form").addEventListener("submit",async n=>{n.preventDefault(),U(e,!0);const o=g(e,"#login-error");o.hidden=!0;try{const l=g(e,"#login-email").value,c=g(e,"#login-pass").value;if(!c.trim()){Y(e,"#login-error",r("auth.error.password"));return}const h=await C.authenticate(l,c);if(h.success===!1){Y(e,"#login-error",G(h.message));return}s(h.user,{session:h.session})}finally{U(e,!1)}}),e}function ie(){const t=document.createElement("div");return t.className="auth-shell fade-in",t}function ft(t){return`
        <div class="role-scene">
            <div class="role-orb role-orb--a" aria-hidden="true"></div>
            <div class="role-orb role-orb--b" aria-hidden="true"></div>
            <div class="role-orb role-orb--c" aria-hidden="true"></div>
            ${t}
        </div>
    `}function bt(t){const e=d.getState().user;if(!(e!=null&&e.email))return t("register"),ie();const s=document.createElement("div");return s.className="fade-in role-shell",s.innerHTML=ft(`
        <header class="role-header stagger-children">
            <span class="auth-pill" data-i18n="role.badge">${r("role.badge")}</span>
            <h2 data-i18n="role.heading">${r("role.heading")}</h2>
            <p class="auth-subtitle role-sub" data-i18n="role.sub">${r("role.sub")}</p>
        </header>
        <div class="role-stage stagger-children">
            <button type="button" id="role-apprentice" class="role-card role-card--apprentice">
                <div class="role-card-glow" aria-hidden="true"></div>
                <div class="role-card-inner">
                    ${$e("apprentice")}
                    <span class="role-tag" data-i18n="role.learn.tag">${r("role.learn.tag")}</span>
                    <h3 data-i18n="role.learn">${r("role.learn")}</h3>
                    <p data-i18n="role.learn.sub">${r("role.learn.sub")}</p>
                    <span class="role-cta">
                        <span class="role-cta-text" data-i18n="role.learn.cta.text">${r("role.learn.cta.text")}</span>
                        <span class="role-cta-arrow" aria-hidden="true">→</span>
                    </span>
                </div>
            </button>
            <button type="button" id="role-instructor" class="role-card role-card--instructor">
                <div class="role-card-glow" aria-hidden="true"></div>
                <div class="role-card-inner">
                    ${$e("instructor")}
                    <span class="role-tag role-tag--warm" data-i18n="role.inst.tag">${r("role.inst.tag")}</span>
                    <h3 data-i18n="role.inst">${r("role.inst")}</h3>
                    <p data-i18n="role.inst.sub">${r("role.inst.sub")}</p>
                    <span class="role-cta role-cta--warm">
                        <span class="role-cta-text" data-i18n="role.inst.cta.text">${r("role.inst.cta.text")}</span>
                        <span class="role-cta-arrow" aria-hidden="true">→</span>
                    </span>
                </div>
            </button>
        </div>
    `),g(s,"#role-apprentice").addEventListener("click",()=>{C.commitRole("apprentice"),t("register-success")}),g(s,"#role-instructor").addEventListener("click",()=>{C.commitRole("instructor"),t("register-success")}),s}function vt(t){var s;const e=document.createElement("div");return e.className="auth-shell fade-in",e.innerHTML=J(`
        <div class="auth-card-header">
            <span class="auth-pill">✦ SENALingua</span>
            <h2 data-i18n="auth.forgot.title">${r("auth.forgot.title")}</h2>
            <p class="auth-subtitle" data-i18n="auth.forgot.sub">${r("auth.forgot.sub")}</p>
        </div>
        <form id="forgot-form" class="auth-form">
            ${_("forgot-email","auth.email","email","developer@misena.edu.co","email")}
            <p id="forgot-error" class="form-error" hidden></p>
            <button type="submit" class="btn-register-action btn-full auth-submit" data-i18n="auth.forgot.submit">
                <span>${r("auth.forgot.submit")}</span>
                <span class="auth-submit-icon" aria-hidden="true">→</span>
            </button>
        </form>
        <p class="auth-switch">
            <button type="button" class="auth-switch-link" id="forgot-back-login" data-i18n="auth.forgot.back">${r("auth.forgot.back")}</button>
        </p>
    `),(s=S(e,"#forgot-back-login"))==null||s.addEventListener("click",()=>t("login")),g(e,"#forgot-form").addEventListener("submit",async a=>{var c,h;a.preventDefault();const i=g(e,"#forgot-error");i.hidden=!0;const n=g(e,"#forgot-email").value,o=await C.requestPasswordReset(n);if(!o.success){Y(e,"#forgot-error",G(o.message??"generic"));return}d.setState({pendingResetEmail:n.trim().toLowerCase()});const l=g(e,".auth-card");l.innerHTML=`
            <div class="auth-success-panel stagger-children">
                <div class="auth-success-icon" aria-hidden="true">✓</div>
                <h2 data-i18n="auth.forgot.sent.title">${r("auth.forgot.sent.title")}</h2>
                <p class="auth-subtitle" data-i18n="auth.forgot.sent.sub">${r("auth.forgot.sent.sub")}</p>
                <div class="auth-reset-code-box">
                    <span class="auth-reset-code-label" data-i18n="auth.forgot.code.label">${r("auth.forgot.code.label")}</span>
                    <strong class="auth-reset-code" data-i18n-skip>${o.code}</strong>
                </div>
                <button type="button" class="btn-register-action btn-full auth-submit" id="go-reset-password" data-i18n="auth.forgot.continue">
                    <span>${r("auth.forgot.continue")}</span>
                    <span class="auth-submit-icon" aria-hidden="true">→</span>
                </button>
                <p class="auth-switch">
                    <button type="button" class="auth-switch-link" id="forgot-back-login-2" data-i18n="auth.forgot.back">${r("auth.forgot.back")}</button>
                </p>
            </div>
        `,K(l),(c=S(e,"#go-reset-password"))==null||c.addEventListener("click",()=>t("reset-password")),(h=S(e,"#forgot-back-login-2"))==null||h.addEventListener("click",()=>t("login"))}),e}function yt(t){var i;const e=d.getState().pendingResetEmail??"",s=document.createElement("div");s.className="auth-shell fade-in",s.innerHTML=J(`
        <div class="auth-card-header">
            <span class="auth-pill">✦ SENALingua</span>
            <h2 data-i18n="auth.reset.title">${r("auth.reset.title")}</h2>
            <p class="auth-subtitle" data-i18n="auth.reset.sub">${r("auth.reset.sub")}</p>
        </div>
        <form id="reset-form" class="auth-form">
            ${_("reset-email","auth.email","email","developer@misena.edu.co","email")}
            <div class="auth-field">
                <label for="reset-code" data-i18n="auth.reset.code">${r("auth.reset.code")}</label>
                <div class="auth-input-wrap">
                    <input type="text" class="input-field auth-input input-code" required id="reset-code" maxlength="6" pattern="[0-9]{6}" inputmode="numeric" autocomplete="one-time-code" placeholder="000000">
                </div>
            </div>
            ${_("reset-pass","auth.reset.new_pass","password","••••••••••••","new-password",8)}
            ${_("reset-pass-confirm","auth.reset.confirm_pass","password","••••••••••••","new-password",8)}
            <p id="reset-error" class="form-error" hidden></p>
            <button type="submit" class="btn-register-action btn-full auth-submit" data-i18n="auth.reset.submit">
                <span>${r("auth.reset.submit")}</span>
                <span class="auth-submit-icon" aria-hidden="true">→</span>
            </button>
        </form>
        <p class="auth-switch">
            <button type="button" class="auth-switch-link" id="reset-back-login" data-i18n="auth.forgot.back">${r("auth.forgot.back")}</button>
        </p>
    `);const a=S(s,"#reset-email");return a&&e&&(a.value=e),(i=S(s,"#reset-back-login"))==null||i.addEventListener("click",()=>t("login")),g(s,"#reset-form").addEventListener("submit",async n=>{var v;n.preventDefault();const o=g(s,"#reset-error");o.hidden=!0;const l=g(s,"#reset-email").value,c=g(s,"#reset-code").value,h=g(s,"#reset-pass").value,m=g(s,"#reset-pass-confirm").value,f=await C.resetPassword(l,c,h,m);if(!f.success){Y(s,"#reset-error",G(f.message??"generic"));return}d.setState({pendingResetEmail:null});const w=g(s,".auth-card");w.innerHTML=`
            <div class="auth-success-panel stagger-children">
                <div class="auth-success-icon" aria-hidden="true">✓</div>
                <h2 data-i18n="auth.reset.success.title">${r("auth.reset.success.title")}</h2>
                <p class="auth-subtitle" data-i18n="auth.reset.success.sub">${r("auth.reset.success.sub")}</p>
                <button type="button" class="btn-register-action btn-full auth-submit" id="reset-go-login" data-i18n="auth.reset.success.cta">
                    <span>${r("auth.reset.success.cta")}</span>
                    <span class="auth-submit-icon" aria-hidden="true">→</span>
                </button>
            </div>
        `,K(w),(v=S(s,"#reset-go-login"))==null||v.addEventListener("click",()=>t("login"))}),s}function $t(t){var n;const e=d.getState().user;if(!(e!=null&&e.email))return t("register"),ie();if(!e.role)return t("role-selection"),ie();const s=e.role,a=s==="instructor",i=document.createElement("div");return i.className="auth-shell fade-in",i.innerHTML=J(`
        <div class="auth-success-panel auth-success-panel--register stagger-children">
            <span class="auth-pill auth-pill--success" data-i18n="auth.register.success.badge">${r("auth.register.success.badge")}</span>
            <div class="auth-success-icon auth-success-icon--large" aria-hidden="true">✓</div>
            <h2 data-i18n="auth.register.success.title">${r("auth.register.success.title")}</h2>
            <p class="auth-subtitle" data-i18n="${a?"auth.register.success.sub.instructor":"auth.register.success.sub.apprentice"}">
                ${r(a?"auth.register.success.sub.instructor":"auth.register.success.sub.apprentice")}
            </p>
            ${e!=null&&e.email?`<p class="auth-success-email" data-i18n-skip>${e.email}</p>`:""}
            <button type="button" class="btn-register-action btn-full auth-submit" id="register-success-cta" data-i18n="${a?"auth.register.success.cta.instructor":"auth.register.success.cta.apprentice"}">
                <span>${r(a?"auth.register.success.cta.instructor":"auth.register.success.cta.apprentice")}</span>
                <span class="auth-submit-icon" aria-hidden="true">→</span>
            </button>
        </div>
    `),(n=S(i,"#register-success-cta"))==null||n.addEventListener("click",()=>{s&&C.routeAfterRegisterSuccess(s,t)}),i}const wt=.6,te=.4,de={A1:{name:{en:"Beginner",es:"Principiante"},cefr:"A1",thetaMin:0,thetaMax:.38},A2:{name:{en:"Elementary",es:"Elementario"},cefr:"A2",thetaMin:.38,thetaMax:.62},B1:{name:{en:"Intermediate",es:"Intermedio"},cefr:"B1",thetaMin:.62,thetaMax:1}},kt={A1:{en:"You can recognise basic technical vocabulary but need structured support with documentation, error messages, and professional communication. Your route prioritises foundational reading of interfaces and simple instructions.",es:"Puedes reconocer vocabulario técnico básico, pero necesitas apoyo estructurado con documentación, mensajes de error y comunicación profesional. Tu ruta prioriza la lectura de interfaces e instrucciones simples."},A2:{en:"You understand straightforward technical texts and common development scenarios, with room to strengthen listening comprehension and written precision in team contexts.",es:"Comprendes textos técnicos directos y escenarios comunes de desarrollo, con margen para fortalecer comprensión auditiva y precisión escrita en contextos de equipo."},B1:{en:"You can interpret documentation, participate in technical discussions, and produce functional written communication. Your route focuses on APIs, pull requests, and junior interview readiness.",es:"Puedes interpretar documentación, participar en discusiones técnicas y producir comunicación escrita funcional. Tu ruta se enfoca en APIs, pull requests y preparación para entrevistas junior."}},ne=["Reading","Listening","Speaking","Writing"],oe=["A1","A2","B1"];function St(t,e){const s=t[e];return s!=null&&s.t?s.c/s.t:0}function M(t,e){return e?Math.round(t/e*100):0}function At(t,e){const s=n=>St(e,n);for(const n of["B1","A2","A1"])if(s(n)>=wt)return{level:n,reason:"mastery",bandPct:M(e[n].c,e[n].t)};if(s("B1")>=te&&t>=.42)return{level:"B1",reason:"partial",bandPct:M(e.B1.c,e.B1.t)};if(s("A2")>=te&&t>=.22)return{level:"A2",reason:"partial",bandPct:M(e.A2.c,e.A2.t)};if(s("A1")>=te)return{level:"A1",reason:"partial",bandPct:M(e.A1.c,e.A1.t)};const i=oe.map(n=>({band:n,rate:s(n),pct:M(e[n].c,e[n].t)})).sort((n,o)=>o.rate-n.rate)[0];return i.rate>0?{level:i.band,reason:"highest_band",bandPct:i.pct}:t>=.55?{level:"B1",reason:"theta",bandPct:M(e.B1.c,e.B1.t)}:t>=.32?{level:"A2",reason:"theta",bandPct:M(e.A2.c,e.A2.t)}:{level:"A1",reason:"theta",bandPct:M(e.A1.c,e.A1.t)}}function we(t,e,s,a){const i=a==="es-CO",n=e[t.level],o=de[t.level].name[i?"es":"en"];return t.reason==="mastery"?i?`Nivel asignado: MCER ${s} (${o}) — alcanzaste ${n.pct}% en la banda ${t.level} (${n.c}/${n.t}), cumpliendo el umbral de dominio ≥60%.`:`Assigned level: CEFR ${s} (${o}) — you scored ${n.pct}% on the ${t.level} band (${n.c}/${n.t}), meeting the ≥60% mastery threshold.`:t.reason==="partial"?i?`Nivel asignado: MCER ${s} (${o}) — ${n.pct}% en la banda ${t.level} (${n.c}/${n.t}), umbral de dominio parcial ≥40%.`:`Assigned level: CEFR ${s} (${o}) — ${n.pct}% on the ${t.level} band (${n.c}/${n.t}), meeting the ≥40% partial-mastery threshold.`:t.reason==="highest_band"?i?`Nivel asignado: MCER ${s} (${o}) — tu banda con mejor desempeño fue ${t.level} (${n.pct}%, ${n.c}/${n.t}).`:`Assigned level: CEFR ${s} (${o}) — your strongest band was ${t.level} (${n.pct}%, ${n.c}/${n.t}).`:i?`Nivel asignado: MCER ${s} (${o}) — respaldo por índice TRI cuando ninguna banda alcanzó el umbral mínimo.`:`Assigned level: CEFR ${s} (${o}) — supported by the IRT index when no band reached the minimum threshold.`}function Ct(t,e,s){const a=s==="es-CO",{level:i,theta:n,rawCorrect:o,totalItems:l,cefrBands:c}=t;return a?[`Respondiste ${o} de ${l} ítems correctamente.`,`Desempeño por banda: A1 ${c.A1.pct}% (${c.A1.c}/${c.A1.t}), A2 ${c.A2.pct}% (${c.A2.c}/${c.A2.t}), B1 ${c.B1.pct}% (${c.B1.c}/${c.B1.t}).`,we(e,c,i,s),`Índice TRI θ = ${n.toFixed(3)} — métrica ponderada de apoyo (dificultad × discriminación).`]:[`You answered ${o} of ${l} items correctly.`,`Band performance: A1 ${c.A1.pct}% (${c.A1.c}/${c.A1.t}), A2 ${c.A2.pct}% (${c.A2.c}/${c.A2.t}), B1 ${c.B1.pct}% (${c.B1.c}/${c.B1.t}).`,we(e,c,i,s),`IRT index θ = ${n.toFixed(3)} — supporting weighted metric (difficulty × discrimination).`]}function Lt(t){let e=0,s=0,a=0;const i=Object.fromEntries(ne.map(v=>[v,{c:0,t:0}])),n=Object.fromEntries(oe.map(v=>[v,{c:0,t:0}]));t.forEach(v=>{const b=ae.find(D=>D.id===v.questionId);if(!b)return;const L=b.difficulty*b.discrimination;s+=L,i[b.skill]&&(i[b.skill].t+=1,v.isCorrect&&(i[b.skill].c+=1)),b.cefr&&n[b.cefr]&&(n[b.cefr].t+=1,v.isCorrect&&(n[b.cefr].c+=1)),v.isCorrect&&(e+=L,a+=1)});const o=e/(s||1),l=At(o,n),c=l.level,h=t.length,m=Object.fromEntries(oe.map(v=>[v,{...n[v],pct:M(n[v].c,n[v].t)}])),f=Object.fromEntries(ne.map(v=>[v,{...i[v],pct:M(i[v].c,i[v].t)}])),w=264-264*Math.min(1,o);return{level:c,placement:l,levelMeta:de[c],theta:o,percentage:Math.round(o*100),rawCorrect:a,totalItems:h,rawPct:M(a,h),skillScores:f,cefrBands:m,cefrScores:n,ringOffset:w,feedback:kt[c],formula:{weightedSum:e,weightTotal:s}}}function Et(t,e){const s=e==="es-CO";return{feedback:s?t.feedback.es:t.feedback.en,levelName:s?t.levelMeta.name.es:t.levelMeta.name.en,rationaleBullets:Ct(t,t.placement,e)}}const xt={Reading:"📖",Listening:"🎧",Speaking:"🎙️",Writing:"✍️"};function Rt(t,e,s){const a=Et(t,e),i=["A1","A2","B1"],n=e==="es-CO"?"es":"en";return`
        <section class="diag-result-focus" aria-labelledby="diag-result-heading">
            <div class="diag-result-ring diag-result-ring--hero" aria-hidden="true">
                <svg viewBox="0 0 100 100" class="diag-ring-svg">
                    <circle class="diag-ring-track" cx="50" cy="50" r="42"/>
                    <circle class="diag-ring-fill" cx="50" cy="50" r="42"
                        style="stroke-dashoffset: ${t.ringOffset}"
                        data-target-offset="${t.ringOffset}"/>
                </svg>
                <div class="diag-ring-center">
                    <span class="diag-ring-level">${t.level}</span>
                    <span class="diag-ring-sub" data-i18n-skip>${a.levelName}</span>
                </div>
            </div>

            <span class="auth-pill diag-result-pill" data-i18n="diag.res.badge">${s("diag.res.badge")}</span>
            <h2 id="diag-result-heading" class="diag-result-title" data-i18n="diag.res">${s("diag.res")}</h2>
            <p class="diag-result-lead" data-i18n="diag.res.lead" data-i18n-params='{"score":"${t.rawCorrect}","total":"${t.totalItems}"}'>${s("diag.res.lead",{score:t.rawCorrect,total:t.totalItems})}</p>

            <div class="diag-scale-minimal" aria-label="${s("diag.scale")}">
                ${i.map(o=>`
                    <span class="diag-scale-pill ${o===t.level?"diag-scale-pill--active":""}">
                        <strong>${o}</strong>
                        <span>${de[o].name[n]}</span>
                    </span>
                `).join("")}
            </div>

            <blockquote class="diag-result-summary">${a.feedback}</blockquote>
        </section>

        <details class="diag-result-details">
            <summary class="diag-result-details-toggle">
                <span data-i18n="diag.details.toggle">${s("diag.details.toggle")}</span>
                <span class="diag-result-details-icon" aria-hidden="true">+</span>
            </summary>

            <div class="diag-details-body">
                <div class="diag-score-chips">
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.raw">${s("diag.stat.raw")}</em>
                        <strong>${t.rawCorrect}/${t.totalItems}</strong>
                    </span>
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.index">${s("diag.stat.index")}</em>
                        <strong>${t.percentage}%</strong>
                    </span>
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.formula">${s("diag.stat.formula")}</em>
                        <strong>θ ${t.theta.toFixed(3)}</strong>
                    </span>
                </div>

                <div class="diag-details-block">
                    <h3 class="diag-details-heading" data-i18n="diag.bands">${s("diag.bands")}</h3>
                    <div class="diag-band-list">
                        ${i.map(o=>{const l=t.cefrBands[o];return`
                                <div class="diag-band-row ${o===t.level?"diag-band-row--active":""}">
                                    <span class="diag-band-row-code">${o}</span>
                                    <div class="diag-band-row-bar">
                                        <div class="diag-band-bar-fill" style="width: 0%" data-band-fill="${o}" data-target="${l.pct}"></div>
                                    </div>
                                    <span class="diag-band-row-pct">${l.pct}%</span>
                                    <span class="diag-band-row-meta" data-i18n-skip>${l.c}/${l.t}</span>
                                </div>
                            `}).join("")}
                    </div>
                </div>

                <div class="diag-details-block">
                    <h3 class="diag-details-heading" data-i18n="diag.skills">${s("diag.skills")}</h3>
                    <div class="diag-skill-list">
                        ${ne.map(o=>{const l=t.skillScores[o];return`
                                <div class="diag-skill-row">
                                    <span class="diag-skill-row-icon" aria-hidden="true">${xt[o]}</span>
                                    <span class="diag-skill-row-name">${o}</span>
                                    <div class="diag-skill-row-bar">
                                        <div class="diag-skill-bar-fill" style="width: 0%" data-skill-fill="${o}" data-target="${l.pct}"></div>
                                    </div>
                                    <span class="diag-skill-row-pct">${l.pct}%</span>
                                </div>
                            `}).join("")}
                    </div>
                </div>

                <div class="diag-details-block diag-details-block--method">
                    <h3 class="diag-details-heading" data-i18n="diag.details.method">${s("diag.details.method")}</h3>
                    <ul class="diag-rationale-list">
                        ${a.rationaleBullets.map(o=>`<li>${o}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </details>

        <button type="button" id="go-dash" class="btn-register-action btn-full diag-submit diag-result-cta">
            <span data-i18n="diag.continue">${s("diag.continue")}</span>
            <span class="auth-submit-icon" aria-hidden="true">→</span>
        </button>
    `}function It(t){const e=()=>{t.querySelectorAll("[data-band-fill], [data-skill-fill]").forEach(i=>{i.style.width=`${i.dataset.target||"0"}%`});const a=t.querySelector(".diag-ring-fill");a&&(a.style.strokeDashoffset=a.dataset.targetOffset||"264")};window.requestAnimationFrame(e);const s=t.querySelector(".diag-result-details");s&&s.addEventListener("toggle",()=>{s.open&&window.requestAnimationFrame(e)})}const Mt={Reading:"skill-reading",Listening:"skill-listening",Speaking:"skill-speaking",Writing:"skill-writing"};function Te(t){return`
        <div class="diag-scene">
            <div class="diag-orb diag-orb--a" aria-hidden="true"></div>
            <div class="diag-orb diag-orb--b" aria-hidden="true"></div>
            <div class="diag-orb diag-orb--c" aria-hidden="true"></div>
            <div class="diag-card-frame">
                <div class="diag-card-glow" aria-hidden="true"></div>
                <div class="diag-card card-premium-luxury stagger-children">
                    ${t}
                </div>
            </div>
        </div>
    `}function Pt(t,e,s){const a=document.createElement("div");return a.className="fade-in diag-shell diag-shell--results",a.innerHTML=Te(Rt(e,s,r)),It(a),a.querySelector("#go-dash").addEventListener("click",()=>{const i=d.getState().user,n=d.getState().classrooms.map(o=>o.code!==d.getState().enrolledClassroomCode?o:{...o,apprentices:o.apprentices.map(l=>l.email===(i==null?void 0:i.email)?{...l,level:e.level}:l)});d.setState({assignedLevel:e.level,diagnosticCompleted:!0,diagnosticStep:0,diagnosticAnswers:[],classrooms:n,user:i&&{...i,role:"apprentice",assignedLevel:e.level},progressPercent:0}),C.syncAccountFromState(),t("apprentice-dashboard")}),a}function Dt(t){const e=d.getState(),s=e.diagnosticStep,a=e.lang,i=ae.length;if(s>=i){const f=Lt(e.diagnosticAnswers);return Pt(t,f,a)}const n=ae[s],o=Math.round(s/i*100),l=Mt[n.skill]||"skill-reading",c=document.createElement("div");c.className="fade-in diag-shell",c.innerHTML=Te(`
        <header class="diag-header">
            <span class="auth-pill diag-pill" data-i18n="diag.banner">${r("diag.banner")}</span>
            <div class="diag-meta">
                <div class="diag-meta-left">
                    <span class="diag-cefr-badge" data-i18n-skip>${n.cefr}</span>
                    <span class="skill-badge ${l}" data-i18n-skip>${n.skill}</span>
                </div>
                <span class="diag-counter" data-i18n-skip>
                    <span data-i18n="diag.q">${r("diag.q")}</span>
                    ${s+1} <span data-i18n="diag.of">${r("diag.of")}</span> ${i}
                </span>
            </div>
            <div class="diag-progress" role="progressbar" aria-valuenow="${o}" aria-valuemin="0" aria-valuemax="100">
                <div class="diag-progress-fill" style="width: ${o}%"></div>
            </div>
        </header>
        <h3 class="diag-question">${n.q}</h3>
        <div class="diag-options" role="listbox" aria-label="${r("diag.q")} ${s+1}">
            ${n.o.map((f,w)=>`
                <button type="button"
                    class="diag-option"
                    data-index="${w}"
                    role="option"
                    aria-selected="false">
                    <span class="diag-option-letter" aria-hidden="true">${_e[w]}</span>
                    <span class="diag-option-text">${f}</span>
                    <span class="diag-option-check" aria-hidden="true">✓</span>
                </button>
            `).join("")}
        </div>
        <p class="diag-hint" data-i18n="diag.hint">${r("diag.hint")}</p>
    `);const h=O(c,".diag-option");let m=!1;return h.forEach(f=>{f.addEventListener("click",()=>{if(m)return;m=!0,h.forEach(b=>{b.disabled=!0,b.classList.remove("diag-option--selected")}),f.classList.add("diag-option--selected"),f.setAttribute("aria-selected","true");const v=parseInt(f.dataset.index??"0",10)===n.c;window.setTimeout(()=>{d.setState({diagnosticStep:s+1,diagnosticAnswers:[...d.getState().diagnosticAnswers,{questionId:n.id,isCorrect:v}]}),t("diagnostic")},380)})}),c}function p(t,e,s,a,i,n,o){const l=a.length>=4?a:[...a,""];if(l.length!==4)throw new Error(`Item ${t} must have 4 options`);return{id:t,skill:e,q:s,o:l,c:i,f:n}}function R(t,e,s){return{id:t,title:e,questions:s}}function V(t,e,s,a){return{id:t,title:e,subtitle:s,lessons:a}}const Tt=[V("a1-m1","Module 1: Development Environment & UI Literacy","Foundational technical reading for software apprentices",[R("a1-m1-l1","Lesson 1.1 — Reading Interface Labels",[p("a1-1-1","Reading",'In a login form, the label "Username" refers to:',["The user's password","The identifier used to authenticate an account","The server hostname","The display name shown in the user profile menu"],1,"Username is the unique identifier for authentication, distinct from the password."),p("a1-1-2","Listening",'You hear: "Click Save to store your changes." What should you do?',["Close the application without saving","Select Save to persist your modifications","Restart the computer","Open settings and disable auto-save"],1,"Save persists modifications to storage. Closing without saving may discard changes."),p("a1-1-3","Speaking",'A teammate asks: "Did you restart the IDE?" Which response is clearest?',['"Maybe."','"Yes, I restarted Visual Studio Code after installing the extension."','"IDE."','"I think so, probably."'],1,"Clear technical responses include the tool name and the action performed."),p("a1-1-4","Writing","Choose the best label for a button that submits a registration form:",["Go","Submit Registration","Press","Cancel"],1,"Action labels should be specific and describe the operation unambiguously."),p("a1-1-5","Reading",'An error states: "File not found." This means:',["The requested file does not exist at the specified path","The internet connection failed","The keyboard is disconnected","The file was moved to a different folder on the same drive"],0,"File not found indicates the system cannot locate the file at the given path.")]),R("a1-m1-l2","Lesson 1.2 — Basic Error Messages",[p("a1-1-6","Reading",'"Connection refused" typically indicates:',["The target service is not accepting connections on that port","The monitor is turned off","The code compiled successfully","The user cancelled the operation before it finished"],0,"Connection refused means the server rejected or is unavailable on the requested port."),p("a1-1-7","Listening",'You hear: "Open the terminal and run npm install." What is the first step?',["Open the command-line terminal application","Delete node_modules permanently","Send an email to the instructor","Run the installer as administrator on another machine"],0,"npm install is executed in the terminal after navigating to the project directory."),p("a1-1-8","Speaking","How do you politely ask for help with an installation error?",['"Fix it."','"Could you help me review this installation error? I have attached the log output."','"Error."','"Help me now."'],1,"Professional requests include context and relevant diagnostic information."),p("a1-1-9","Writing","Select the clearest folder name for a frontend project:",["stuff","frontend-app","aaa","myProject"],1,"Descriptive folder names improve project organisation and team collaboration."),p("a1-1-10","Listening",'You hear: "The build failed." What happened?',["The compilation or build process did not complete successfully","The project was deployed to production","All tests passed","The build completed and artifacts were published successfully"],0,"A failed build means the project could not be compiled or packaged successfully.")])]),V("a1-m2","Module 2: Version Control Foundations","Introduction to Git vocabulary and basic workflows",[R("a1-m2-l1","Lesson 2.1 — Git Terminology",[p("a1-2-1","Reading",'In Git, a "commit" is:',["A saved snapshot of changes in the repository history","A type of virus","An email notification","A command that deletes all remote branches"],0,"A commit records a snapshot of staged changes in version history."),p("a1-2-2","Listening",'You hear: "Stage your changes before committing." What should you do?',["Use git add to prepare changes for the next commit","Delete the repository","Rename the main branch","Commit directly without reviewing staged files"],0,"Staging (git add) prepares modifications before they are committed."),p("a1-2-3","Speaking","Which phrase correctly describes cloning a repository?",['"I cloned the remote repository to my local machine."','"I cloned the keyboard."','"Clone is done maybe."','"I downloaded Git from the website."'],0,"Cloning copies a remote repository to a local development environment."),p("a1-2-4","Writing","Best commit message for adding a README file:",["update","docs: add project README with setup instructions","asdf","wip"],1,"Commit messages should follow convention and describe the change purpose."),p("a1-2-5","Reading",'"Branch" in Git refers to:',["An independent line of development","A hardware component","A CSS property","A network cable used for server connections"],0,"Branches allow parallel development without affecting the main codebase.")]),R("a1-m2-l2","Lesson 2.2 — Basic Git Operations",[p("a1-2-6","Reading","git status shows:",["The current state of the working directory and staging area","The weather forecast","CPU temperature","A list of all contributors who cloned the repository"],0,"git status reports modified, staged, and untracked files."),p("a1-2-7","Listening",'You hear: "Push your commits to the remote." What does this mean?',["Upload local commits to the remote repository","Remove all commits","Format the hard drive","Download commits from the remote to your local machine"],0,"git push transfers local commits to the remote server."),p("a1-2-8","Speaking","During stand-up, how do you report Git progress?",['"I did Git."','"I created a feature branch and pushed two commits for the login form."','"Branches."','"I used version control today."'],1,"Stand-up updates should specify branch, commits, and feature context."),p("a1-2-9","Writing","Select the appropriate PR title:",["changes","feat: add user login form validation","???","fix bug"],1,"PR titles use conventional prefixes and describe the feature scope."),p("a1-2-10","Listening",'You hear: "There is a merge conflict in app.js." What is required?',["Manually resolve conflicting changes before completing the merge","Ignore the conflict and continue","Uninstall Git","Wait for the conflict to resolve automatically after 24 hours"],0,"Merge conflicts require manual resolution of incompatible changes.")])])],qt=[V("a2-m1","Module 1: Documentation & Troubleshooting","Intermediate reading and support communication",[R("a2-m1-l1","Lesson 1.1 — Reading Technical Documentation",[p("a2-1-1","Reading",'API docs state: "Requires Bearer token in Authorization header." You must:',["Include a valid token in the Authorization header","Disable authentication","Change the database schema","Send the token in the URL query string only"],0,"Bearer tokens authenticate API requests via the Authorization header."),p("a2-1-2","Listening",'You hear: "Check the stack trace starting from the innermost exception." What do you inspect?',["The deepest (innermost) exception in the error chain","The application logo","The CSS colour palette","The outermost exception message shown first in the log"],0,"The innermost exception often reveals the root cause of the failure."),p("a2-1-3","Speaking","How do you explain a bug to a senior developer?",['"It fails."','"The POST /orders endpoint returns 500 when the payload omits the customerId field."','"Backend."','"Something is wrong with the API."'],1,"Precise bug reports include endpoint, status code, and conditions."),p("a2-1-4","Writing","Best subject for a support ticket:",["help","[Support] Unable to connect to staging database","???","API problem"],1,"Support tickets need environment, issue summary, and clear categorisation."),p("a2-1-5","Reading",'"Deprecated" in documentation means:',["The feature is discouraged and may be removed in future versions","The feature is newly released","The feature is mandatory","The feature is required for all new implementations"],0,"Deprecated APIs should be replaced with supported alternatives.")]),R("a2-m1-l2","Lesson 1.2 — Code Comments & Team Email",[p("a2-1-6","Writing","Select the most useful code comment:",["// loop","// Retry up to 3 times before failing — required by payment gateway SLA","// code","// TODO"],1,"Comments should explain non-obvious business rules or constraints."),p("a2-1-7","Listening",'You hear: "Please cherry-pick commit a1b2c3d onto the release branch." What is requested?',["Apply a specific commit to another branch","Delete the release branch","Merge all branches at once","Merge the entire main branch into your feature branch"],0,"Cherry-pick applies individual commits across branches."),p("a2-1-8","Speaking","In a planning meeting, which statement defines scope?",['"I will do backend."','"I will implement pagination on GET /products with unit tests by Friday."','"Maybe API."','"I will work on tasks this sprint."'],1,"Scope statements include endpoint, deliverable, and deadline."),p("a2-1-9","Reading",'A README section "Prerequisites" lists:',["Required tools and versions before setup","The project's marketing slogan","Team birthdays","Team contact information and office locations"],0,"Prerequisites document dependencies needed before installation."),p("a2-1-10","Writing","Professional email to request environment access:",['"Give me access."','"Dear IT Team, could you please grant me staging access for project ADSO-3312932? Thank you."','"access pls"','"Need staging access ASAP thx"'],1,"Professional emails are polite, specific, and include project context.")])]),V("a2-m2","Module 2: Agile Workflows & Code Review","Collaboration language for development teams",[R("a2-m2-l1","Lesson 2.1 — Pull Requests & Issues",[p("a2-2-1","Reading",'A PR comment: "Consider extracting this into a utility function." The reviewer suggests:',["Refactoring repeated logic into a reusable function","Deleting the file","Changing the programming language","Increasing the font size in the editor"],0,"Extraction reduces duplication and improves maintainability."),p("a2-2-2","Listening",'You hear: "The CI pipeline is red." What does this mean?',["Automated checks failed","The UI colour theme changed","The sprint ended","Continuous integration completed successfully"],0,"A red pipeline indicates failed builds, tests, or quality gates."),p("a2-2-3","Speaking","How do you respond when asked about a failed test?",['"Tests bad."','"The UserServiceTest fails because the mock repository returns null for GetById."',`"I don't know."`,'"I will look at it later."'],1,"Explain which test fails and the underlying cause."),p("a2-2-4","Writing","Best issue title for a performance problem:",["slow","[Perf] Dashboard query exceeds 3s on datasets >10k rows","fix","bug in dashboard"],1,"Issue titles should include category, symptom, and measurable context."),p("a2-2-5","Reading",'"LGTM" in a code review typically means:',["Looks Good To Me — approval to merge","Log Git Terminal Mode","Launch Global Test Module","Let Git Terminal Merge — automated deployment tool"],0,"LGTM signals reviewer approval of the proposed changes.")]),R("a2-m2-l2","Lesson 2.2 — Stand-ups & Handover Notes",[p("a2-2-6","Speaking","Strong stand-up update format:",['"Same as yesterday."','"Yesterday I fixed the auth middleware; today I will add integration tests; no blockers."','"Working."','"Yesterday: stuff. Today: stuff."'],1,"Stand-ups follow yesterday / today / blockers structure."),p("a2-2-7","Listening",'You hear: "We need a rollback plan before deployment." What is required?',["A documented procedure to revert to the previous stable version","A new programming language","Removing all tests","A procedure to increase server capacity before deployment"],0,"Rollback plans mitigate deployment risk in production environments."),p("a2-2-8","Writing","Handover note for a colleague covering your task:",['"Good luck."','"Branch: feature/payments. Remaining: validate webhook signature. See TODO in PaymentController.cs line 84."','"Done."','"Check the repo."'],1,"Handover notes include branch, remaining work, and file references."),p("a2-2-9","Reading",'"Blocked" in agile context means:',["Progress cannot continue until an impediment is resolved","The task is complete","The sprint was cancelled","The task is waiting in the backlog for next sprint"],0,"Blockers prevent task completion and should be escalated promptly."),p("a2-2-10","Listening",`You hear: "Let's pair on this bug after stand-up." What is proposed?`,["Collaborative debugging session with a colleague","Solo work only","Skipping the bug fix","Working independently without sharing screen or context"],0,"Pairing enables shared context and faster resolution of complex issues.")])])],jt=[V("b1-m1","Module 1: APIs & System Integration","Advanced technical reading and integration language",[R("b1-m1-l1","Lesson 1.1 — API Contracts & HTTP Semantics",[p("b1-1-1","Reading",'OpenAPI spec: "POST /users returns 201 on success." 201 means:',["Resource created successfully","Server error","Authentication required","Request accepted and queued for processing"],0,"HTTP 201 Created indicates successful resource creation."),p("b1-1-2","Listening",'You hear: "The client must send an Idempotency-Key header for POST requests." Why?',["To safely retry requests without duplicating side effects","To encrypt the payload","To change the response format","To compress the request body with gzip encoding"],0,"Idempotency keys prevent duplicate operations on retried requests."),p("b1-1-3","Speaking","Explain an API rate-limiting issue to the team:",['"API bad."','"We are receiving 429 responses because our batch job exceeds 100 req/min; I propose exponential backoff."','"Fix API."','"The API is slow sometimes."'],1,"Technical explanations include status code, cause, and proposed mitigation."),p("b1-1-4","Writing","Document an endpoint in a wiki:",['"It works."','"POST /api/v1/orders — Creates an order. Requires Bearer auth. Body: { customerId, items[] }. Returns 201 + orderId."','"Orders."','"API for orders."'],1,"API documentation specifies method, path, auth, payload, and response."),p("b1-1-5","Reading",'"Pagination" in API design refers to:',["Splitting large result sets into manageable pages","Encrypting responses","Deleting old records","Caching responses in the client browser only"],0,"Pagination limits response size and improves performance for large datasets.")]),R("b1-m1-l2","Lesson 1.2 — Integration Failures & Debugging",[p("b1-1-6","Reading",'Log: "SSL handshake failed: certificate expired." Action:',["Renew or replace the expired TLS certificate","Increase RAM","Rename the service","Restart the application server without changing certificates"],0,"Expired certificates break TLS handshakes and must be renewed."),p("b1-1-7","Listening",'You hear: "The webhook signature validation failed." What failed?',["The HMAC/signature check on the incoming webhook payload","The database backup","The CSS build","The webhook URL was not registered in the dashboard"],0,"Webhook signatures verify payload authenticity and integrity."),p("b1-1-8","Speaking",'Mock interview: "Describe how you debugged a production incident."',['"I fixed it quickly."','"I correlated logs, identified a memory leak in the cache service, rolled back release 2.4.1, and wrote a post-mortem."','"Production."','"We had an outage."'],1,"Incident responses cover detection, diagnosis, mitigation, and documentation."),p("b1-1-9","Writing","Post-mortem summary sentence:",['"Bad day."','"Root cause: race condition in OrderProcessor under concurrent load. Mitigation: distributed lock added in v2.4.2."','"Fixed."','"Incident resolved."'],1,"Post-mortems document root cause and corrective actions."),p("b1-1-10","Listening",'You hear: "Circuit breaker opened for PaymentService." Meaning:',["The service stopped forwarding requests after repeated failures","Payment succeeded","The sprint review started","The payment service received a successful response from the gateway"],0,"Circuit breakers prevent cascade failures by halting calls to unhealthy services.")])]),V("b1-m2","Module 2: Professional Technical Communication","PRs, interviews, and formal reporting",[R("b1-m2-l1","Lesson 2.1 — Pull Requests & Code Review Language",[p("b1-2-1","Reading",'PR description: "Breaking change: removes v1 endpoints." Implication:',["Clients using v1 endpoints must migrate before upgrading","No impact on consumers","Only UI changes","Only internal team members are affected"],0,"Breaking changes require consumer migration and version planning."),p("b1-2-2","Listening",'You hear: "Request changes — missing unit tests for edge cases." Required action:',["Add unit tests covering edge cases before re-review","Merge immediately","Close the repository","Request a senior reviewer instead of adding tests"],0,"Request changes means address feedback before approval."),p("b1-2-3","Speaking","Defend a design decision in review:",['"Because I said so."','"I chose event-driven updates to decouple the notification service from order processing, reducing coupling."','"Design."','"I followed a tutorial."'],1,"Design rationale should reference architecture goals and trade-offs."),p("b1-2-4","Writing","Formal bug report for security issue:",['"Security bug!!!"',"[SEC] SQL injection vector in search parameter — steps to reproduce attached",'"hack"','"Found vulnerability"'],1,"Security reports use clear severity tags and reproduction steps."),p("b1-2-5","Reading",'"Squash and merge" in GitHub:',["Combines all commits into one before merging","Deletes the repository","Creates a new branch","Rebases all branches onto a new default branch"],0,"Squash merge consolidates commit history into a single commit on the target branch.")]),R("b1-m2-l2","Lesson 2.2 — Junior Technical Interviews",[p("b1-2-6","Speaking",'Interview: "Explain REST in your own words."',['"REST is web stuff."','"REST is an architectural style using stateless HTTP methods and resource-based URLs to perform CRUD operations."',`"I don't know REST."`,'"REST is when you use the internet."'],1,"Definitions should mention statelessness, HTTP methods, and resources."),p("b1-2-7","Listening",'You hear: "Walk me through your debugging process." Best approach:',["Describe systematic steps: reproduce, isolate, hypothesise, test, verify","Say you guess randomly","Decline to answer","Describe only the tools you would install"],0,"Structured debugging demonstrates professional methodology."),p("b1-2-8","Writing","Thank-you email after technical interview:",['"Thanks."','"Dear [Name], thank you for the opportunity to interview for the Junior Developer role. I enjoyed discussing the API integration challenge. Kind regards."','"Bye"','"Thanks for the interview bye"'],1,"Post-interview emails are concise, professional, and reference specific discussion points."),p("b1-2-9","Reading",'Job description: "Familiarity with CI/CD pipelines." This requires:',["Understanding automated build, test, and deployment workflows","Only manual deployments","Graphic design skills","Experience designing marketing landing pages only"],0,"CI/CD automates integration, testing, and delivery of software changes."),p("b1-2-10","Listening",'You hear: "Tell me about a time you received constructive feedback." Respond with:',["A specific example showing reflection and improvement",'"I never get feedback."','"Feedback is bad."',"Decline to share any personal experience"],0,"Behavioural answers use STAR format: situation, task, action, result.")])])],ke={A1:Tt,A2:qt,B1:jt};function ue(t){return ke[t]||ke.A1}function Ot(t,e){const s=ue(t);for(const a of s){const i=a.lessons.find(n=>n.id===e);if(i)return{module:a,lesson:i}}return null}function qe(t){return ue(t).flatMap(e=>e.lessons.map(s=>({...s,moduleId:e.id,moduleTitle:e.title})))}function Bt(t){return qe(t).length}function Ht(){return"ADSO"+Math.floor(100+Math.random()*900)}function N(t){if(!t)return t;const e=t.createdAt||new Date().toISOString(),s=t.displayAt||e;let a=Array.isArray(t.dateHistory)?[...t.dateHistory]:[];return a.length||(a=[{action:"created",at:e,by:"system",recordedAt:e}]),{...t,createdAt:e,displayAt:s,dateHistory:a,state:t.state==="Inactive"?"Inactive":"Active"}}function se(t){return t.map(N)}function Se(){const t=d.getState().user;return(t==null?void 0:t.email)||(t==null?void 0:t.name)||"instructor"}const y={normalizeClassroom:N,normalizeAll:se,getByFicha(t){const e=d.getState().classrooms.find(s=>s.ficha===t);return e?N(e):null},getDisplayAt(t){return N(t).displayAt},wasDateModified(t){return N(t).dateHistory.some(s=>s.action==="modified")},joinByCode(t,e){var l,c;const s=t.trim().toUpperCase(),a=se(d.getState().classrooms),i=a.find(h=>h.code.toUpperCase()===s);if(!i)return{success:!1,message:"invalid_code"};if(i.state==="Inactive")return{success:!1,message:"classroom_inactive"};const n={id:`app-${Date.now()}`,name:e.name||e.email.split("@")[0],email:e.email,level:d.getState().assignedLevel||"Pending",streak:((l=d.getState().learnerStats)==null?void 0:l.streak)||0,points:((c=d.getState().learnerStats)==null?void 0:c.points)||0,lastActivity:new Date().toISOString()},o=a.map(h=>h.code.toUpperCase()!==s?h:h.apprentices.some(f=>f.email===e.email)?{...h,apprentices:h.apprentices.map(f=>f.email===e.email?{...f,name:n.name,lastActivity:n.lastActivity}:f)}:{...h,apprentices:[...h.apprentices,n]});return d.setState({classrooms:o,enrolledClassroomCode:i.code,user:{...e,role:"apprentice",classroomCode:i.code,ficha:i.ficha}}),{success:!0,classroom:i}},createClassroom(t,e){const s=t.trim();if(!s)return{success:!1,message:"ficha_required"};const a=se(d.getState().classrooms);if(a.some(o=>o.ficha===s))return{success:!1,message:"ficha_exists"};const i=new Date().toISOString(),n=N({ficha:s,program:e||"Análisis y Desarrollo de Software (ADSO)",code:Ht(),createdAt:i,displayAt:i,dateHistory:[{action:"created",at:i,by:Se(),recordedAt:i}],state:"Active",apprentices:[]});return d.setState({classrooms:[...a,n]}),{success:!0,classroom:n}},deleteClassroom(t){d.setState({classrooms:d.getState().classrooms.filter(e=>e.ficha!==t),viewClassroomFicha:d.getState().viewClassroomFicha===t?null:d.getState().viewClassroomFicha})},removeApprentice(t,e){const s=d.getState().classrooms.map(a=>a.ficha!==t?a:{...a,apprentices:a.apprentices.filter(i=>i.id!==e)});d.setState({classrooms:s})},toggleClassroomState(t){var s;const e=d.getState().classrooms.map(a=>{if(a.ficha!==t)return a;const i=a.state==="Active"?"Inactive":"Active";return{...a,state:i}});return d.setState({classrooms:e}),(s=e.find(a=>a.ficha===t))==null?void 0:s.state},updateDisplayDate(t,e){const s=new Date(e);if(Number.isNaN(s.getTime()))return{success:!1,message:"invalid_date"};const a=s.toISOString(),i=Se(),n=new Date().toISOString();let o=null;const l=d.getState().classrooms.map(c=>{if(c.ficha!==t)return c;const h=N(c);if(h.displayAt===a)return o=h,h;const m={action:"modified",from:h.displayAt,to:a,by:i,recordedAt:n};return o={...h,displayAt:a,dateHistory:[...h.dateHistory,m]},o});return d.setState({classrooms:l}),{success:!0,classroom:o}},toDatetimeLocalValue(t){const e=new Date(t),s=a=>String(a).padStart(2,"0");return`${e.getFullYear()}-${s(e.getMonth()+1)}-${s(e.getDate())}T${s(e.getHours())}:${s(e.getMinutes())}`},formatDate(t,e){const s=e==="es-CO"?"es-CO":"en-GB";return new Date(t).toLocaleString(s,{dateStyle:"medium",timeStyle:"short"})},isUserInClassroomRoster(t,e){if(!t||!e)return!1;const s=t.trim().toLowerCase();return e.apprentices.some(a=>a.email===s)},resolveEnrollment(t){var i;const e=t.enrolledClassroomCode,s=(i=t.user)==null?void 0:i.email;if(!e||!s)return{enrolled:!1,classroom:null,code:null};const a=t.classrooms.find(n=>n.code===e);return!a||!this.isUserInClassroomRoster(s,a)?{enrolled:!1,classroom:null,code:null,stale:!!e}:{enrolled:!0,classroom:this.normalizeClassroom(a),code:e}},clearStaleEnrollment(){const t=d.getState(),{stale:e}=this.resolveEnrollment(t);return e&&d.setState({enrolledClassroomCode:null}),e},renderDateHistory(t,e,s){const a=N(t),i=e==="es-CO";return a.dateHistory.map((n,o)=>n.action==="created"?`
                    <li class="date-history-item date-history-item--created">
                        <span class="date-history-badge">${s("classroom.history.created")}</span>
                        <span class="date-history-when">${y.formatDate(n.at,e)}</span>
                        <span class="date-history-meta">${i?"Registrado":"Recorded"}: ${y.formatDate(n.recordedAt||n.at,e)}</span>
                    </li>
                `:`
                <li class="date-history-item date-history-item--modified">
                    <span class="date-history-badge">${s("classroom.history.modified")} #${o}</span>
                    <span class="date-history-change">
                        ${y.formatDate(n.from,e)}
                        →
                        <strong>${y.formatDate(n.to,e)}</strong>
                    </span>
                    <span class="date-history-meta">${i?"Por":"By"}: ${n.by} · ${y.formatDate(n.recordedAt,e)}</span>
                </li>
            `).join("")}},X={getDefaultStats(){return{streak:1,points:0,rank:null}},calculateProgressPercent(t,e){const s=Bt(t);if(!s)return 0;const a=Object.values(e).filter(i=>i.completed).length;return Math.round(a/s*100)},calculateRank(t,e,s){if(!t)return"—";const a=[...t.apprentices].sort((n,o)=>o.points-n.points),i=a.findIndex(n=>n.email===e);return i===-1?`#${a.length+1}`:`#${String(i+1).padStart(2,"0")}`},completeLesson(t,e,s){const a=d.getState(),i={...a.lessonProgress,[t]:{completed:!0,score:e,total:s,completedAt:new Date().toISOString()}},n=e*50+(e===s?25:0),o={...a.learnerStats,points:a.learnerStats.points+n,streak:a.learnerStats.streak+1},l=a.assignedLevel||"A1",c=this.calculateProgressPercent(l,i),h=a.classrooms.map(m=>m.code!==a.enrolledClassroomCode?m:{...m,apprentices:m.apprentices.map(f=>{var w;return f.email===((w=a.user)==null?void 0:w.email)?{...f,points:o.points,streak:o.streak,level:l,lastActivity:new Date().toISOString()}:f})});d.setState({lessonProgress:i,learnerStats:o,progressPercent:c,classrooms:h}),C.syncAccountFromState()},isLessonUnlocked(t,e,s){var o;const a=qe(t),i=a.findIndex(l=>l.id===e);if(i<=0)return!0;const n=a[i-1];return((o=s[n==null?void 0:n.id])==null?void 0:o.completed)===!0}};function je(t=""){const e=t.trim().split(/\s+/).filter(Boolean);return e.length?e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase():"AD"}function Nt(t){const s=2*Math.PI*42,a=s-t/100*s;return`
        <div class="hub-ring" aria-label="${t}%">
            <svg width="108" height="108" viewBox="0 0 100 100">
                <circle class="hub-ring-track" cx="50" cy="50" r="42"/>
                <circle class="hub-ring-fill" cx="50" cy="50" r="42"
                    stroke-dasharray="${s}" stroke-dashoffset="${s}"
                    data-target-offset="${a}"/>
            </svg>
            <span class="hub-ring-text">${t}%</span>
        </div>
    `}function _t(t,e){return`
        <div class="hub-profile-overlay" id="hub-profile-overlay" hidden>
            <div class="hub-profile-drawer" role="dialog" aria-modal="true" aria-labelledby="hub-profile-title">
                <button type="button" class="hub-profile-close" id="hub-profile-close" aria-label="${r("profile.cancel")}">×</button>
                <div class="hub-profile-drawer-head">
                    <span class="hub-avatar hub-avatar--lg" aria-hidden="true">${je(t==null?void 0:t.name)}</span>
                    <h2 id="hub-profile-title" data-i18n="profile.title">${r("profile.title")}</h2>
                    <p data-i18n="profile.sub">${r("profile.sub")}</p>
                </div>
                <form id="hub-profile-form" class="hub-profile-form">
                    <div class="hub-field">
                        <label for="profile-name" data-i18n="profile.name">${r("profile.name")}</label>
                        <input type="text" id="profile-name" class="input-field auth-input" value="${(t==null?void 0:t.name)||""}" required autocomplete="name">
                    </div>
                    <div class="hub-field">
                        <label for="profile-email" data-i18n="profile.email">${r("profile.email")}</label>
                        <input type="email" id="profile-email" class="input-field auth-input" value="${(t==null?void 0:t.email)||""}" required autocomplete="email">
                    </div>
                    <div class="hub-field hub-field--readonly">
                        <label data-i18n="profile.level">${r("profile.level")}</label>
                        <span class="hub-readonly-value">CEFR ${e}</span>
                    </div>
                    <div class="hub-field hub-field--readonly">
                        <label data-i18n="profile.role">${r("profile.role")}</label>
                        <span class="hub-readonly-value" data-i18n="profile.role.apprentice">${r("profile.role.apprentice")}</span>
                    </div>
                    <p id="profile-saved-msg" class="hub-profile-saved" hidden data-i18n="profile.saved">${r("profile.saved")}</p>
                    <div class="hub-profile-actions">
                        <button type="button" class="btn-login-action" id="hub-profile-cancel" data-i18n="profile.cancel">${r("profile.cancel")}</button>
                        <button type="submit" class="btn-register-action" data-i18n="profile.save">${r("profile.save")}</button>
                    </div>
                </form>
            </div>
        </div>
    `}function zt(t,e){const s=t.querySelector("#hub-profile-overlay"),a=t.querySelector("#hub-open-profile"),i=t.querySelector("#hub-profile-close"),n=t.querySelector("#hub-profile-cancel"),o=t.querySelector("#hub-profile-form"),l=t.querySelector("#profile-saved-msg"),c=()=>{s.hidden=!0,document.body.classList.remove("hub-drawer-open")},h=()=>{var m;s.hidden=!1,document.body.classList.add("hub-drawer-open"),(m=t.querySelector("#profile-name"))==null||m.focus()};a==null||a.addEventListener("click",h),i==null||i.addEventListener("click",c),n==null||n.addEventListener("click",c),s==null||s.addEventListener("click",m=>{m.target===s&&c()}),o==null||o.addEventListener("submit",m=>{m.preventDefault(),C.updateProfile({name:t.querySelector("#profile-name").value,email:t.querySelector("#profile-email").value}),l.hidden=!1,window.setTimeout(()=>{c(),e("apprentice-dashboard")},600)})}function Ft(t){window.requestAnimationFrame(()=>{const e=t.querySelector(".hub-ring-fill");e&&(e.style.strokeDashoffset=e.dataset.targetOffset||"0"),t.querySelectorAll("[data-stat-fill]").forEach(s=>{s.style.width=`${s.dataset.target||0}%`})})}function Wt(t,e){if(!t)return"";const s=y.normalizeClassroom(t),a=y.wasDateModified(s),i=s.state==="Active";return`
        <section class="hub-classroom-audit card-premium-luxury">
            <div class="hub-classroom-audit-head">
                <span class="hub-enrolled-tag">
                    ${u("check","ui-icon ui-icon--xs")}
                    ${r("join.enrolled")} <strong>${s.code}</strong>
                </span>
                <span class="status-pill ${i?"status-pill--active":"status-pill--inactive"}">
                    ${u("zap","ui-icon ui-icon--xs")}
                    ${r(i?"classroom.status.active":"classroom.status.inactive")}
                </span>
            </div>
            <div class="hub-classroom-audit-dates">
                <div>
                    <span class="hub-audit-label" data-i18n="classroom.date.original">${r("classroom.date.original")}</span>
                    <strong>${y.formatDate(s.createdAt,e)}</strong>
                </div>
                <div>
                    <span class="hub-audit-label" data-i18n="classroom.date.display">${r("classroom.date.display")}</span>
                    <strong>
                        ${y.formatDate(s.displayAt,e)}
                        ${a?`<span class="date-modified-badge">${u("history","ui-icon ui-icon--xs")}<span data-i18n="classroom.date.modified">${r("classroom.date.modified")}</span></span>`:""}
                    </strong>
                </div>
            </div>
            ${a?`
            <details class="hub-classroom-audit-history" open>
                <summary>
                    ${u("history","ui-icon ui-icon--xs")}
                    <span data-i18n="classroom.history.title">${r("classroom.history.title")}</span>
                </summary>
                <ul class="date-history-list">
                    ${y.renderDateHistory(s,e,r)}
                </ul>
                <p class="inst-date-security" data-i18n="classroom.history.security">${r("classroom.history.security")}</p>
            </details>
            `:""}
        </section>
    `}function Yt(t){var D,T;d.getState(),y.clearStaleEnrollment()&&C.syncAccountFromState();const e=d.getState(),s=e.user??{email:"",name:"Developer"},a=e.assignedLevel||s.assignedLevel||"A1",i=y.resolveEnrollment(e),{enrolled:n,classroom:o}=i,l=ue(a),c=X.calculateProgressPercent(a,e.lessonProgress),h=X.calculateRank(o,s.email,e.learnerStats.points),m=e.learnerStats,f=((D=s.name)==null?void 0:D.split(" ")[0])||"Developer",w=JSON.stringify({name:f}),v=je(s.name),b=document.createElement("div");b.className="fade-in apprentice-hub",b.innerHTML=`
        <div class="hub-scene">
            <div class="hub-orb hub-orb--a" aria-hidden="true"></div>
            <div class="hub-orb hub-orb--b" aria-hidden="true"></div>

            <header class="hub-command-bar">
                <button type="button" class="hub-profile-chip" id="hub-open-profile">
                    <span class="hub-avatar" aria-hidden="true">${v}</span>
                    <span class="hub-profile-chip-text">
                        <strong data-i18n-skip>${s.name||f}</strong>
                        <span data-i18n-skip>CEFR ${a}</span>
                    </span>
                    <span class="hub-profile-chip-hint">
                        ${u("user","ui-icon ui-icon--xs")}
                        <span data-i18n="dash.profile.open">${r("dash.profile.open")}</span>
                    </span>
                </button>
                <button type="button" class="hub-logout-btn btn-with-icon" id="hub-logout">
                    ${u("logout","ui-icon ui-icon--sm")}
                    <span data-i18n="dash.logout">${r("dash.logout")}</span>
                </button>
            </header>

            <section class="hub-hero card-premium-luxury">
                <div class="hub-hero-content">
                    <span class="auth-pill hub-pill">
                        ${u("sparkles","ui-icon ui-icon--xs")}
                        <span data-i18n-skip>ADSO · ${a}</span>
                    </span>
                    <h1 data-i18n="dash.welcome" data-i18n-params='${w}'>${r("dash.welcome",{name:f})}</h1>
                    <p class="hub-hero-sub" data-i18n="dash.route">${r("dash.route")}</p>
                </div>
                ${Nt(c)}
            </section>

            <div class="hub-stats" role="list">
                <div class="hub-stat" role="listitem">
                    <span class="hub-stat-icon stat-fire">${u("flame","ui-icon")}</span>
                    <strong>${m.streak}</strong>
                    <span data-i18n="dash.streak">${r("dash.streak")}</span>
                </div>
                <div class="hub-stat" role="listitem">
                    <span class="hub-stat-icon">${u("star","ui-icon")}</span>
                    <strong>${m.points}</strong>
                    <span data-i18n="dash.points">${r("dash.points")}</span>
                </div>
                <div class="hub-stat" role="listitem">
                    <span class="hub-stat-icon">${u("trophy","ui-icon")}</span>
                    <strong>${h}</strong>
                    <span data-i18n="dash.rank">${r("dash.rank")}</span>
                </div>
                <div class="hub-stat hub-stat--progress" role="listitem">
                    <span class="hub-stat-icon">${u("trendUp","ui-icon")}</span>
                    <strong>${c}%</strong>
                    <span data-i18n="dash.progress">${r("dash.progress")}</span>
                    <div class="hub-stat-bar"><div class="hub-stat-bar-fill" data-stat-fill data-target="${c}"></div></div>
                </div>
            </div>

            ${n?Wt(o,e.lang):`
            <section class="hub-classroom-enrol card-premium-luxury" aria-labelledby="hub-enrol-heading">
                <div class="hub-classroom-enrol-head">
                    <span class="hub-classroom-enrol-icon" aria-hidden="true">${u("classroom","ui-icon")}</span>
                    <div>
                        <h2 id="hub-enrol-heading" data-i18n="join.dash.title">${r("join.dash.title")}</h2>
                        <p data-i18n="join.dash.desc">${r("join.dash.desc")}</p>
                    </div>
                </div>
                <form id="dash-join-form" class="hub-join-form hub-join-form--prominent">
                    <label class="sr-only" for="dash-classroom-code" data-i18n="join.code.label">${r("join.code.label")}</label>
                    <input type="text" class="input-field input-code" id="dash-classroom-code" placeholder="ADSO331" required autocomplete="off">
                    <button type="submit" class="btn-register-action btn-with-icon">
                        ${u("key","ui-icon ui-icon--sm")}
                        <span data-i18n="join.submit">${r("join.submit")}</span>
                    </button>
                </form>
                <p class="hub-join-hint">
                    ${u("sparkles","ui-icon ui-icon--xs")}
                    <span data-i18n="join.hint">${r("join.hint")}</span>
                </p>
                <p id="dash-join-error" class="form-error" hidden></p>
            </section>
            `}

            <section class="hub-modules-section">
                <div class="hub-section-head">
                    ${u("layers","ui-icon ui-icon--sm")}
                    <h2 data-i18n-skip>${r("dash.mod")} · ${a}</h2>
                </div>
                <div class="hub-module-list">
                    ${l.map((k,q)=>`
                        <article class="hub-module card-premium-luxury">
                            <header class="hub-module-head">
                                <span class="hub-module-index">0${q+1}</span>
                                <div>
                                    <h3>${k.title}</h3>
                                    <p>${k.subtitle}</p>
                                </div>
                            </header>
                            <div class="hub-lessons">
                                ${k.lessons.map(E=>{const $=e.lessonProgress[E.id],B=X.isLessonUnlocked(a,E.id,e.lessonProgress),I=$==null?void 0:$.completed,P=I?`${$.score}/${$.total}`:"",Be=u(I?"check":B?"play":"lock","ui-icon ui-icon--sm");return`
                                        <div class="hub-lesson ${B?"":"hub-lesson--locked"} ${I?"hub-lesson--done":""}">
                                            <div class="hub-lesson-main">
                                                <span class="hub-lesson-icon" aria-hidden="true">${Be}</span>
                                                <div>
                                                    <strong>${E.title}</strong>
                                                    <span class="hub-lesson-meta">
                                                        <span>5 ${r("dash.questions")}</span>
                                                        ${Ze()}
                                                    </span>
                                                </div>
                                            </div>
                                            ${I?`<span class="hub-lesson-score">${u("check","ui-icon ui-icon--xs")} ${P}</span>`:B?`<button type="button" class="btn-register-action btn-sm lesson-start-btn btn-with-icon" data-lesson="${E.id}">
                                                        ${u("play","ui-icon ui-icon--xs")}
                                                        <span>${r("dash.start.lesson")}</span>
                                                       </button>`:`<span class="hub-lesson-locked">
                                                        ${u("lock","ui-icon ui-icon--xs")}
                                                        <span data-i18n="dash.locked">${r("dash.locked")}</span>
                                                       </span>`}
                                        </div>
                                    `}).join("")}
                            </div>
                        </article>
                    `).join("")}
                </div>
            </section>
        </div>
        ${_t(s,a)}
    `,Ft(b),zt(b,t),(T=S(b,"#hub-logout"))==null||T.addEventListener("click",()=>{C.logout(),t("home")}),O(b,".lesson-start-btn").forEach(k=>{k.addEventListener("click",()=>{d.setState({activeLessonId:k.dataset.lesson??null,currentLessonStep:0,lessonAnswers:[]}),t("lesson-environment")})});const L=S(b,"#dash-join-form");return L&&L.addEventListener("submit",k=>{k.preventDefault();const q=g(b,"#dash-classroom-code").value,E=y.joinByCode(q,d.getState().user),$=g(b,"#dash-join-error");if(!E.success){$.hidden=!1,$.textContent=E.message==="classroom_inactive"?r("join.inactive"):r("join.error");return}$.hidden=!0,C.syncAccountFromState(),t("apprentice-dashboard")}),b}function F(t,e){return`<th scope="col"><span class="inst-th">${u(e,"ui-icon ui-icon--xs")}${r(t)}</span></th>`}function Gt(t){const e=d.getState(),s=e.classrooms.length,a=e.classrooms.reduce((n,o)=>n+o.apprentices.length,0),i=document.createElement("div");return i.className="fade-in inst-hub",i.innerHTML=`
        <div class="inst-scene">
            <div class="inst-orb inst-orb--a" aria-hidden="true"></div>
            <div class="inst-orb inst-orb--b" aria-hidden="true"></div>

            <header class="inst-hero card-premium-luxury">
                <div class="inst-hero-text">
                    <span class="auth-pill inst-pill">
                        ${u("shield","ui-icon ui-icon--xs")}
                        <span data-i18n="inst.badge">Instructor · ADSO</span>
                    </span>
                    <h1 data-i18n="inst.title">${r("inst.title")}</h1>
                    <p data-i18n="inst.sub">${r("inst.sub")}</p>
                </div>
                <button type="button" id="btn-create-class" class="btn-register-action inst-create-btn">
                    ${u("plus","ui-icon ui-icon--sm")}
                    <span data-i18n="inst.create.text">${r("inst.create.text")}</span>
                </button>
            </header>

            <div class="inst-kpis" role="list">
                <div class="inst-kpi" role="listitem">
                    ${u("classroom","ui-icon inst-kpi-icon")}
                    <strong>${s}</strong>
                    <span data-i18n="inst.kpi.classrooms">${r("inst.kpi.classrooms")}</span>
                </div>
                <div class="inst-kpi" role="listitem">
                    ${u("users","ui-icon inst-kpi-icon")}
                    <strong>${a}</strong>
                    <span data-i18n="inst.kpi.apprentices">${r("inst.kpi.apprentices")}</span>
                </div>
                <div class="inst-kpi" role="listitem">
                    ${u("chart","ui-icon inst-kpi-icon")}
                    <strong>${s?Math.round(a/s):0}</strong>
                    <span data-i18n="inst.kpi.avg">${r("inst.kpi.avg")}</span>
                </div>
            </div>

            <div id="create-modal" class="modal-overlay" hidden>
                <div class="modal-card card-premium-luxury inst-modal" role="dialog" aria-modal="true" aria-labelledby="inst-modal-title">
                    <div class="inst-modal-head">
                        <span class="inst-modal-icon" aria-hidden="true">${u("classroom","ui-icon")}</span>
                        <div>
                            <h3 id="inst-modal-title" data-i18n="inst.modal.title">${r("inst.modal.title")}</h3>
                            <p class="auth-subtitle" data-i18n="inst.modal.desc">${r("inst.modal.desc")}</p>
                        </div>
                    </div>
                    <form id="create-class-form">
                        <div class="form-box">
                            <label for="new-ficha">
                                ${u("key","ui-icon ui-icon--xs")}
                                <span data-i18n="inst.modal.ficha">${r("inst.modal.ficha")}</span>
                            </label>
                            <input type="text" class="input-field" id="new-ficha" required placeholder="3312932" pattern="[0-9]+" inputmode="numeric">
                        </div>
                        <div class="form-box">
                            <label for="new-program">
                                ${u("clipboard","ui-icon ui-icon--xs")}
                                <span data-i18n="inst.modal.program">${r("inst.modal.program")}</span>
                            </label>
                            <input type="text" class="input-field" id="new-program" value="${r("inst.modal.program.default")}">
                        </div>
                        <p id="create-error" class="form-error" hidden></p>
                        <div class="modal-actions">
                            <button type="button" id="cancel-create" class="btn-login-action" data-i18n="inst.modal.cancel">${r("inst.modal.cancel")}</button>
                            <button type="submit" class="btn-register-action">
                                ${u("plus","ui-icon ui-icon--sm")}
                                <span data-i18n="inst.modal.confirm">${r("inst.modal.confirm")}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="table-card card-premium-luxury inst-table-wrap">
                <div class="inst-table-scroll">
                    <table class="data-table inst-table">
                        <thead>
                            <tr>
                                ${F("table.prog","clipboard")}
                                ${F("table.ficha","key")}
                                ${F("table.code","copy")}
                                ${F("table.learners","users")}
                                ${F("table.created","calendar")}
                                ${F("table.state","zap")}
                                <th scope="col"><span class="inst-th">${u("sparkles","ui-icon ui-icon--xs")}${r("table.actions")}</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${e.classrooms.length?e.classrooms.map(n=>{const o=y.normalizeClassroom(n),l=o.state==="Active",c=y.wasDateModified(o);return`
                                <tr class="classroom-row ${l?"":"classroom-row--inactive"}">
                                    <td>${o.program}</td>
                                    <td><strong class="inst-ficha">${o.ficha}</strong></td>
                                    <td>
                                        <code class="code-chip" title="${r("table.code")}">
                                            ${u("key","ui-icon ui-icon--xs")}
                                            ${o.code}
                                        </code>
                                    </td>
                                    <td>
                                        <span class="inst-metric">
                                            ${u("users","ui-icon ui-icon--xs")}
                                            ${o.apprentices.length}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="inst-date-cell">
                                            ${y.formatDate(o.displayAt,e.lang)}
                                            ${c?`<span class="date-modified-dot" title="${r("classroom.date.modified")}"></span>`:""}
                                        </span>
                                    </td>
                                    <td>
                                        <button type="button"
                                            class="status-toggle ${l?"status-toggle--active":"status-toggle--inactive"} btn-toggle-state"
                                            data-ficha="${o.ficha}"
                                            aria-pressed="${l}">
                                            ${u("zap","ui-icon ui-icon--xs")}
                                            <span data-i18n-skip>${r(l?"classroom.status.active":"classroom.status.inactive")}</span>
                                        </button>
                                    </td>
                                    <td>
                                        <div class="actions-cell inst-actions">
                                            <button type="button"
                                                class="btn-login-action btn-with-icon btn-view-apprentices"
                                                data-ficha="${o.ficha}">
                                                ${u("users","ui-icon ui-icon--sm")}
                                                <span data-i18n="inst.expand">${r("inst.expand")}</span>
                                            </button>
                                            <button type="button"
                                                class="btn-danger-sm btn-with-icon btn-delete-class"
                                                data-ficha="${o.ficha}">
                                                ${u("trash","ui-icon ui-icon--sm")}
                                                <span data-i18n="inst.delete">${r("inst.delete")}</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>`}).join(""):`
                                <tr>
                                    <td colspan="7" class="inst-empty inst-empty--hero">
                                        ${u("classroom","ui-icon")}
                                        <strong data-i18n="inst.empty.title">${r("inst.empty.title")}</strong>
                                        <span data-i18n="inst.empty.desc">${r("inst.empty.desc")}</span>
                                    </td>
                                </tr>
                            `}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,g(i,"#btn-create-class").addEventListener("click",()=>{var n;g(i,"#create-modal").hidden=!1,(n=S(i,"#new-ficha"))==null||n.focus()}),g(i,"#cancel-create").addEventListener("click",()=>{g(i,"#create-modal").hidden=!0,g(i,"#create-error").hidden=!0}),g(i,"#create-class-form").addEventListener("submit",n=>{n.preventDefault();const o=g(i,"#new-ficha").value,l=g(i,"#new-program").value,c=y.createClassroom(o,l),h=g(i,"#create-error");if(!c.success){h.hidden=!1,h.textContent=c.message==="ficha_exists"?r("inst.error.ficha"):r("inst.error.ficha.required");return}g(i,"#create-modal").hidden=!0,t("instructor-dashboard")}),O(i,".btn-view-apprentices").forEach(n=>{n.addEventListener("click",()=>{d.setState({viewClassroomFicha:n.dataset.ficha??null}),t("classroom-apprentices")})}),O(i,".btn-toggle-state").forEach(n=>{n.addEventListener("click",()=>{y.toggleClassroomState(n.dataset.ficha??""),t("instructor-dashboard")})}),O(i,".btn-delete-class").forEach(n=>{n.addEventListener("click",()=>{confirm(r("inst.delete.confirm"))&&(y.deleteClassroom(n.dataset.ficha??""),t("instructor-dashboard"))})}),i}const Ut={A1:"level-a1",A2:"level-a2",B1:"level-b1"};function W(t,e){return`<th scope="col"><span class="inst-th">${u(e,"ui-icon ui-icon--xs")}${r(t)}</span></th>`}function Vt(t,e){return t.apprentices.map(s=>`
        <tr>
            <td>
                <span class="inst-cell-user">
                    ${u("user","ui-icon ui-icon--sm")}
                    <span>${s.name}</span>
                </span>
            </td>
            <td>
                <code class="email-chip">
                    ${u("mail","ui-icon ui-icon--xs")}
                    ${s.email}
                </code>
            </td>
            <td>
                <span class="level-badge-sm ${Ut[s.level]||""}">
                    ${u("target","ui-icon ui-icon--xs")}
                    ${s.level}
                </span>
            </td>
            <td>
                <span class="inst-metric">
                    ${u("flame","ui-icon ui-icon--xs")}
                    ${s.streak}
                </span>
            </td>
            <td>
                <span class="inst-metric">
                    ${u("star","ui-icon ui-icon--xs")}
                    ${s.points}
                </span>
            </td>
            <td>${s.lastActivity?y.formatDate(s.lastActivity,e):"—"}</td>
            <td>
                <button type="button"
                    class="btn-danger-sm btn-icon-only btn-remove-apprentice"
                    data-ficha="${t.ficha}"
                    data-id="${s.id}"
                    aria-label="${r("inst.remove.apprentice")} — ${s.name}">
                    ${u("trash","ui-icon ui-icon--sm")}
                    <span class="sr-only" data-i18n="inst.remove.apprentice">${r("inst.remove.apprentice")}</span>
                </button>
            </td>
        </tr>
    `).join("")}function Kt(t){var h;const e=d.getState(),s=e.viewClassroomFicha,a=s?y.getByFicha(s):null,i=e.lang,n=document.createElement("div");if(n.className="fade-in inst-hub",!a)return n.innerHTML=`
            <div class="inst-scene">
                <div class="card-premium-luxury inst-empty inst-empty--hero">
                    ${u("classroom","ui-icon")}
                    <strong data-i18n="classroom.not.found">${r("classroom.not.found")}</strong>
                    <button type="button" class="btn-register-action" id="back-inst" data-i18n="inst.back">${r("inst.back")}</button>
                </div>
            </div>
        `,n.querySelector("#back-inst").addEventListener("click",()=>t("instructor-dashboard")),n;const o=y.normalizeClassroom(a),l=y.wasDateModified(o),c=o.state==="Active";return n.innerHTML=`
        <div class="inst-scene inst-scene--detail">
            <div class="inst-orb inst-orb--a" aria-hidden="true"></div>
            <div class="inst-orb inst-orb--b" aria-hidden="true"></div>

            <header class="inst-detail-hero card-premium-luxury">
                <div class="inst-detail-head">
                    <button type="button" class="btn-login-action btn-with-icon inst-back-link" id="back-inst">
                        ${u("arrowLeft","ui-icon ui-icon--sm")}
                        <span data-i18n="inst.back">${r("inst.back")}</span>
                    </button>
                    <div class="inst-detail-title">
                        <span class="auth-pill inst-pill">
                            ${u("users","ui-icon ui-icon--xs")}
                            <span data-i18n-skip>${r("inst.apprentices.title")} · Ficha ${o.ficha}</span>
                        </span>
                        <h1 data-i18n-skip>${o.program}</h1>
                        <div class="inst-detail-meta">
                            <code class="code-chip">${u("key","ui-icon ui-icon--xs")}${o.code}</code>
                            <span class="inst-metric">${u("users","ui-icon ui-icon--xs")}${o.apprentices.length}</span>
                            <button type="button"
                                class="status-toggle ${c?"status-toggle--active":"status-toggle--inactive"}"
                                id="toggle-status"
                                data-ficha="${o.ficha}"
                                aria-pressed="${c}">
                                ${u("zap","ui-icon ui-icon--xs")}
                                <span data-i18n-skip>${r(c?"classroom.status.active":"classroom.status.inactive")}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section class="inst-date-panel card-premium-luxury">
                <div class="inst-date-panel-head">
                    <h2>
                        ${u("calendar","ui-icon ui-icon--sm")}
                        <span data-i18n="classroom.date.title">${r("classroom.date.title")}</span>
                    </h2>
                    ${l?`<span class="date-modified-badge">${u("history","ui-icon ui-icon--xs")}<span data-i18n="classroom.date.modified">${r("classroom.date.modified")}</span></span>`:""}
                </div>

                <div class="inst-date-grid">
                    <div class="inst-date-field inst-date-field--readonly">
                        <label data-i18n="classroom.date.original">${r("classroom.date.original")}</label>
                        <p>${y.formatDate(o.createdAt,i)}</p>
                        <span class="inst-date-hint" data-i18n="classroom.date.original.hint">${r("classroom.date.original.hint")}</span>
                    </div>
                    <form id="date-edit-form" class="inst-date-edit">
                        <label for="display-date-input">
                            ${u("clock","ui-icon ui-icon--xs")}
                            <span data-i18n="classroom.date.display">${r("classroom.date.display")}</span>
                        </label>
                        <div class="inst-date-edit-row">
                            <input type="datetime-local"
                                id="display-date-input"
                                class="input-field"
                                value="${y.toDatetimeLocalValue(o.displayAt)}"
                                required>
                            <button type="submit" class="btn-register-action btn-sm btn-with-icon">
                                ${u("pen","ui-icon ui-icon--xs")}
                                <span data-i18n="classroom.date.save">${r("classroom.date.save")}</span>
                            </button>
                        </div>
                        <p id="date-save-msg" class="hub-profile-saved" hidden data-i18n="classroom.date.saved">${r("classroom.date.saved")}</p>
                    </form>
                </div>

                <details class="inst-date-history" ${l?"open":""}>
                    <summary class="inst-date-history-toggle">
                        ${u("history","ui-icon ui-icon--xs")}
                        <span data-i18n="classroom.history.title">${r("classroom.history.title")}</span>
                    </summary>
                    <ul class="date-history-list" aria-label="${r("classroom.history.title")}">
                        ${y.renderDateHistory(o,i,r)}
                    </ul>
                    <p class="inst-date-security" data-i18n="classroom.history.security">${r("classroom.history.security")}</p>
                </details>
            </section>

            <div class="table-card card-premium-luxury inst-table-wrap">
                <div class="inst-table-toolbar">
                    <h2>${u("users","ui-icon ui-icon--sm")}<span data-i18n="inst.apprentices.title">${r("inst.apprentices.title")}</span></h2>
                    <span class="inst-panel-count">${o.apprentices.length}</span>
                </div>
                <div class="inst-table-scroll">
                    <table class="data-table inst-table">
                        <thead>
                            <tr>
                                ${W("inst.col.name","user")}
                                ${W("inst.col.email","mail")}
                                ${W("inst.col.level","target")}
                                ${W("inst.col.streak","flame")}
                                ${W("inst.col.points","star")}
                                ${W("inst.col.activity","clock")}
                                <th scope="col"><span class="inst-th">${r("table.actions")}</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${o.apprentices.length?Vt(o,i):`<tr><td colspan="7" class="inst-empty">${u("users","ui-icon ui-icon--sm")}<span data-i18n="inst.no.apprentices">${r("inst.no.apprentices")}</span></td></tr>`}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,g(n,"#back-inst").addEventListener("click",()=>{d.setState({viewClassroomFicha:null}),t("instructor-dashboard")}),(h=S(n,"#toggle-status"))==null||h.addEventListener("click",()=>{y.toggleClassroomState(o.ficha),t("classroom-apprentices")}),g(n,"#date-edit-form").addEventListener("submit",m=>{m.preventDefault();const f=g(n,"#display-date-input").value;if(y.updateDisplayDate(o.ficha,f).success){const v=g(n,"#date-save-msg");v.hidden=!1,window.setTimeout(()=>t("classroom-apprentices"),500)}}),O(n,".btn-remove-apprentice").forEach(m=>{m.addEventListener("click",()=>{confirm(r("inst.remove.confirm"))&&(y.removeApprentice(m.dataset.ficha??"",m.dataset.id??""),t("classroom-apprentices"))})}),n}const re=["Reading","Listening","Speaking","Writing"],Jt={Reading:{difficulty:.28,discrimination:1.1},Listening:{difficulty:.32,discrimination:1.15},Speaking:{difficulty:.3,discrimination:1.1},Writing:{difficulty:.34,discrimination:1.2}},Qt={A1:{en:"Beginner",es:"Principiante"},A2:{en:"Elementary",es:"Elementario"},B1:{en:"Intermediate",es:"Intermedio"}};function Ae(t,e){return e?Math.round(t/e*100):0}const Xt=["a","b","c","d"];function Zt(t,e,s="en-GB"){var T;const a=s==="es-CO";let i=0,n=0,o=0;const l=Object.fromEntries(re.map(k=>[k,{c:0,t:0}]));t.forEach(k=>{const q=Jt[k.skill]||{difficulty:.3,discrimination:1},E=q.difficulty*q.discrimination;n+=E,l[k.skill]&&(l[k.skill].t+=1,k.isCorrect&&(l[k.skill].c+=1)),k.isCorrect&&(i+=E,o+=1)});const c=t.length,h=n?i/n:0,m=Ae(o,c),f=Math.round(h*100),w=Object.fromEntries(re.map(k=>[k,{...l[k],pct:Ae(l[k].c,l[k].t)}])),v=264-264*Math.min(1,h);let b="developing";m>=80?b="strong":m>=60?b="solid":m>=40?b="developing":b="support";const L=((T=Qt[e])==null?void 0:T[a?"es":"en"])||e,D=a?{strong:`Desempeño sólido en ${e} (${L}). Dominas el vocabulario técnico de esta lección.`,solid:`Buen desempeño en ${e}. Refuerza las habilidades con menor porcentaje.`,developing:`Progreso en desarrollo en ${e}. Revisa la retroalimentación de cada ítem.`,support:`Se recomienda repetir la lección y apoyo adicional en ${e}.`}[b]:{strong:`Strong performance at ${e} (${L}). You handle this lesson's technical English well.`,solid:`Good performance at ${e}. Reinforce skills with lower scores.`,developing:`Developing progress at ${e}. Review feedback on each item.`,support:`Consider repeating this lesson with additional ${e} support.`}[b];return{rawCorrect:o,total:c,rawPct:m,weightedPct:f,theta:h,ringOffset:v,skills:w,assignedLevel:e,levelName:L,performanceKey:b,feedback:D}}function es(t){const e={Reading:"📖",Listening:"🎧",Speaking:"🎙️",Writing:"✍️"};return re.map(s=>{const a=t[s];return a.t?`
            <div class="lesson-result-skill">
                <span class="lesson-result-skill-icon">${e[s]}</span>
                <span class="lesson-result-skill-name">${s}</span>
                <div class="lesson-result-skill-bar">
                    <div class="lesson-result-skill-fill" data-lesson-skill-fill data-target="${a.pct}"></div>
                </div>
                <span class="lesson-result-skill-pct">${a.pct}%</span>
            </div>
        `:""}).join("")}function ts(t,e,s,a,i){return`
        <section class="lesson-result-focus" aria-labelledby="lesson-result-heading">
            <div class="diag-result-ring diag-result-ring--hero" aria-hidden="true">
                <svg viewBox="0 0 100 100" class="diag-ring-svg">
                    <circle class="diag-ring-track" cx="50" cy="50" r="42"/>
                    <circle class="diag-ring-fill" cx="50" cy="50" r="42"
                        style="stroke-dashoffset: ${t.ringOffset}"
                        data-target-offset="${t.ringOffset}"/>
                </svg>
                <div class="diag-ring-center">
                    <span class="diag-ring-level">${t.assignedLevel}</span>
                    <span class="diag-ring-sub" data-i18n-skip>${t.levelName}</span>
                </div>
            </div>

            <span class="auth-pill lesson-result-pill" data-i18n="lesson.res.badge">${s("lesson.res.badge")}</span>
            <h2 id="lesson-result-heading" class="diag-result-title" data-i18n="lesson.res.title">${s("lesson.res.title")}</h2>
            <p class="lesson-result-lesson" data-i18n-skip>${a}</p>
            <p class="diag-result-lead" data-i18n="lesson.res.lead" data-i18n-params='{"score":"${t.rawCorrect}","total":"${t.total}"}'>${s("lesson.res.lead",{score:t.rawCorrect,total:t.total})}</p>

            <div class="lesson-route-progress" aria-label="${s("lesson.route.progress")}">
                <div class="lesson-route-progress-head">
                    <span data-i18n="lesson.route.progress">${s("lesson.route.progress")}</span>
                    <strong data-i18n-skip>${i}%</strong>
                </div>
                <div class="lesson-route-progress-bar" role="progressbar" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100">
                    <div class="lesson-route-progress-fill" style="width: ${i}%"></div>
                </div>
            </div>

            <blockquote class="diag-result-summary">${t.feedback}</blockquote>
        </section>

        <details class="diag-result-details lesson-result-details">
            <summary class="diag-result-details-toggle">
                <span data-i18n="lesson.details.toggle">${s("lesson.details.toggle")}</span>
                <span class="diag-result-details-icon" aria-hidden="true">+</span>
            </summary>

            <div class="diag-details-body">
                <div class="diag-score-chips">
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.raw">${s("diag.stat.raw")}</em>
                        <strong>${t.rawCorrect}/${t.total}</strong>
                    </span>
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.index">${s("diag.stat.index")}</em>
                        <strong>${t.weightedPct}%</strong>
                    </span>
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.formula">${s("diag.stat.formula")}</em>
                        <strong>θ ${t.theta.toFixed(3)}</strong>
                    </span>
                </div>

                <div class="diag-details-block">
                    <h3 class="diag-details-heading" data-i18n="diag.skills">${s("diag.skills")}</h3>
                    <div class="lesson-result-skills">${es(t.skills)}</div>
                </div>

                <div class="diag-details-block">
                    <h3 class="diag-details-heading" data-i18n="lesson.details.method">${s("lesson.details.method")}</h3>
                    <p class="lesson-formula-note" data-i18n="lesson.formula.note">${s("lesson.formula.note")}</p>
                </div>
            </div>
        </details>

        <button type="button" id="btn-return-dash" class="btn-register-action lesson-result-cta" data-i18n="lesson.return">${s("lesson.return")}</button>
    `}function ss(t){window.requestAnimationFrame(()=>{t.querySelectorAll("[data-lesson-skill-fill]").forEach(s=>{s.style.width=`${s.dataset.target||"0"}%`});const e=t.querySelector(".diag-ring-fill");if(e){const s=e.dataset.targetOffset||e.style.strokeDashoffset;e.style.strokeDashoffset="264",window.requestAnimationFrame(()=>{e.style.strokeDashoffset=s})}})}const as={Reading:"skill-reading",Listening:"skill-listening",Speaking:"skill-speaking",Writing:"skill-writing"};function Oe(t){return`
        <div class="lesson-scene">
            <div class="lesson-orb lesson-orb--a" aria-hidden="true"></div>
            <div class="lesson-orb lesson-orb--b" aria-hidden="true"></div>
            <div class="lesson-orb lesson-orb--c" aria-hidden="true"></div>
            <div class="lesson-card-frame">
                <div class="lesson-card-glow" aria-hidden="true"></div>
                <div class="lesson-card card-premium-luxury stagger-children">
                    ${t}
                </div>
            </div>
        </div>
    `}function is(t,e,s,a,i,n){const o=Zt(s,a,i),l=document.createElement("div");return l.className="fade-in lesson-shell lesson-shell--results",l.innerHTML=Oe(ts(o,i,r,e,n)),ss(l),l.querySelector("#btn-return-dash").addEventListener("click",()=>{d.setState({currentLessonStep:0,lessonAnswers:[],activeLessonId:null}),t("apprentice-dashboard")}),l}function ns(t){var E;const e=d.getState(),s=e.assignedLevel||"A1",a=e.activeLessonId,i=e.currentLessonStep,n=e.lang,o=e.progressPercent??0,l=Ot(s,a);if(!l){const $=document.createElement("div");return $.className="auth-shell fade-in",$.innerHTML=`
            <div class="card-premium-luxury auth-card">
                <p data-i18n="lesson.not.found">${r("lesson.not.found")}</p>
                <button class="btn-register-action btn-full" id="back-dash" data-i18n="lesson.back">${r("lesson.back")}</button>
            </div>
        `,$.querySelector("#back-dash").addEventListener("click",()=>t("apprentice-dashboard")),$}const{module:c,lesson:h}=l,m=h.questions,f=m.length;if(i>=f){const $=e.lessonAnswers.filter(P=>P.isCorrect).length;((E=e.lessonProgress[a])==null?void 0:E.completed)||X.completeLesson(a,$,f);const I=d.getState().progressPercent??o;return is(t,h.title,e.lessonAnswers,s,n,I)}const w=m[i],v=as[w.skill]||"skill-reading",b=Math.round((i+1)/f*100),L=document.createElement("div");L.className="fade-in lesson-shell",L.innerHTML=Oe(`
        <div class="lesson-global-track" aria-label="${r("lesson.route.progress")}">
            <div class="lesson-global-track-label">
                <span data-i18n="lesson.route.progress">${r("lesson.route.progress")}</span>
                <strong data-i18n-skip>${o}%</strong>
            </div>
            <div class="lesson-global-track-bar" role="progressbar" aria-valuenow="${o}" aria-valuemin="0" aria-valuemax="100">
                <div class="lesson-global-track-fill" style="width: ${o}%"></div>
            </div>
        </div>

        <header class="lesson-header">
            <span class="auth-pill lesson-pill" data-i18n="lesson.banner">${r("lesson.banner")}</span>
            <p class="lesson-breadcrumb" data-i18n-skip>
                <span>${c.title}</span> · <strong>${h.title}</strong>
            </p>
            <div class="lesson-meta">
                <div class="lesson-meta-left">
                    <span class="diag-cefr-badge" data-i18n-skip>${s}</span>
                    <span class="skill-badge ${v}" data-i18n-skip>${w.skill}</span>
                </div>
                <span class="lesson-counter" data-i18n-skip>
                    <span data-i18n="diag.q">${r("diag.q")}</span>
                    ${i+1} <span data-i18n="diag.of">${r("diag.of")}</span> ${f}
                </span>
            </div>
            <div class="lesson-progress-dual">
                <div class="lesson-progress-row">
                    <span class="lesson-progress-label" data-i18n="lesson.item.progress">${r("lesson.item.progress")}</span>
                    <div class="lesson-progress" role="progressbar" aria-valuenow="${b}" aria-valuemin="0" aria-valuemax="100">
                        <div class="lesson-progress-fill" style="width: ${b}%"></div>
                    </div>
                </div>
            </div>
        </header>

        <h3 class="lesson-question">${w.q}</h3>

        <div class="lesson-options" id="options-stack" role="listbox" aria-label="${r("diag.q")} ${i+1}">
            ${w.o.map(($,B)=>`
                <button type="button"
                    class="lesson-option"
                    data-index="${B}"
                    role="option"
                    aria-selected="false">
                    <span class="lesson-option-letter" aria-hidden="true">${Xt[B]}</span>
                    <span class="lesson-option-text">${$}</span>
                    <span class="lesson-option-icon" aria-hidden="true"></span>
                </button>
            `).join("")}
        </div>

        <div id="dynamic-feedback-area" class="lesson-feedback" role="status" aria-live="polite" hidden></div>

        <footer class="lesson-footer">
            <button type="button" id="btn-next-step" class="btn-register-action" hidden data-i18n="lesson.next">${r("lesson.next")}</button>
        </footer>
    `);let D=!1;const T=O(L,".lesson-option"),k=g(L,"#dynamic-feedback-area"),q=g(L,"#btn-next-step");return T.forEach($=>{$.addEventListener("click",()=>{if(D)return;D=!0;const I=parseInt($.dataset.index??"0",10)===w.c;if(T.forEach(P=>{P.disabled=!0,P.classList.remove("lesson-option--selected")}),$.classList.add("lesson-option--selected"),$.setAttribute("aria-selected","true"),I)$.classList.add("lesson-option--correct"),S($,".lesson-option-icon").textContent="✓";else{$.classList.add("lesson-option--incorrect"),S($,".lesson-option-icon").textContent="✕";const P=T[w.c];P&&(P.classList.add("lesson-option--correct"),S(P,".lesson-option-icon").textContent="✓")}k.hidden=!1,k.className=`lesson-feedback feedback-box ${I?"feedback-correct":"feedback-incorrect"}`,k.innerHTML=`
                <strong>${r(I?"lesson.correct":"lesson.incorrect")}</strong>
                <p>${w.f}</p>
            `,d.setState({lessonAnswers:[...d.getState().lessonAnswers,{questionId:w.id,isCorrect:I,skill:w.skill}]}),q.hidden=!1})}),q.addEventListener("click",()=>{d.setState({currentLessonStep:i+1}),t("lesson-environment")}),L}function os(t){const e=d.getState().user;if(t==="role-selection"&&!(e!=null&&e.email))return"register";if(t==="register-success"){if(!(e!=null&&e.email))return"register";if(!e.role)return"role-selection"}const a={diagnostic:"apprentice","apprentice-dashboard":"apprentice","lesson-environment":"apprentice","instructor-dashboard":"instructor","classroom-apprentices":"instructor"}[t];return a?e!=null&&e.email?e.role?e.role!==a?e.role==="instructor"?"instructor-dashboard":"apprentice-dashboard":t:"role-selection":"login":t}const rs={home:at,register:mt,login:gt,"forgot-password":vt,"reset-password":yt,"register-success":$t,"role-selection":bt,diagnostic:Dt,"apprentice-dashboard":Yt,"instructor-dashboard":Gt,"classroom-apprentices":Kt,"lesson-environment":ns};function ls(t){var n;const e=(o,l=!1)=>{const c=l?o:os(o),h=rs[c];if(h){if(!l){const m=d.getState().historyStack;m[m.length-1]!==c&&d.setState({historyStack:[...m,c]})}t.innerHTML="",t.appendChild(h(e)),s(),K(),window.scrollTo(0,0)}};function s(){const o=document.getElementById("btn-global-back"),l=d.getState().historyStack,c=l[l.length-1];o&&(o.hidden=l.length<=1||c==="home")}(n=document.getElementById("btn-global-back"))==null||n.addEventListener("click",()=>{const o=d.getState().historyStack;if(o.length>1){const l=[...o];l.pop();const c=l[l.length-1];d.setState({historyStack:l}),e(c,!0)}});const a=()=>{d.setState({historyStack:["home"]}),e("home")},i=document.getElementById("go-home");return i?(i.addEventListener("click",a),i.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),a())}),{navigateTo:e}):{navigateTo:e}}function Ce(t){return t==="en-GB"?'🇬🇧 <span class="lang-text">English (UK)</span>':'🇨🇴 <span class="lang-text">Español (Col)</span>'}function Le(t){document.documentElement.lang=t==="es-CO"?"es":"en"}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app-root");if(!t)return;const{navigateTo:e}=ls(t),s=d.getState().lang;Le(s);const a=y.normalizeAll(d.getState().classrooms||[]);d.setState({classrooms:a});const i=document.getElementById("btn-lang-toggle");i&&(i.innerHTML=Ce(s),i.addEventListener("click",()=>{const o=d.getState().lang==="en-GB"?"es-CO":"en-GB";i.innerHTML=Ce(o),d.setState({lang:o}),Le(o),K();const l=d.getState().historyStack;e(l[l.length-1],!0)})),K(),e("home")});
