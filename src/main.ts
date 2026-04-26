import './style.css';
import { GOSPEL_CLARITY_CARDS } from './data/clarityCards';
import { GOSPEL_STEPS } from './data/gospelJourney';
import { JESUS_IDENTITY_SECTIONS } from './data/jesusIdentity';
import { SCRIPTURE_LIBRARY } from './data/library';
import { NEXT_STEPS } from './data/nextSteps';
import { PRAYER_PROMPTS } from './data/prayerPrompts';
import { RESPONSE_OPTIONS } from './data/respondOptions';
import { SCARLET_THREAD_STOPS } from './data/scarletThread';
import { SCRIPTURES, getScriptureById } from './data/scriptures';
import { WHY_NEED_SAVING_SECTIONS } from './data/whyNeedSaving';

const STORAGE_KEYS = {
  progress: 'gospel-journey-progress-step',
  reflection: 'gospel-journey-reflection',
  saveEnabled: 'gospel-journey-save-enabled',
};

const shareText =
  'I found this Gospel Journey helpful and wanted to share it with you. It explains who Jesus is, why He came, and what it means to trust Him.';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Missing #app root element.');
}

type PageId =
  | 'home'
  | 'journey'
  | 'who-is-jesus'
  | 'why-saving'
  | 'scarlet-thread'
  | 'respond'
  | 'next-steps'
  | 'scripture-library'
  | 'prayer-response'
  | 'about';

type NavItem = { href: string; label: string; page: PageId };

const page = (document.body.dataset.page as PageId) ?? 'home';
const storageEnabled = localStorage.getItem(STORAGE_KEYS.saveEnabled) === 'true';

const primaryNav: NavItem[] = [
  { href: './index.html', label: 'Home', page: 'home' },
  { href: './journey.html', label: 'Journey', page: 'journey' },
  { href: './who-is-jesus.html', label: 'Who Is Jesus?', page: 'who-is-jesus' },
  { href: './scarlet-thread.html', label: 'Scarlet Thread', page: 'scarlet-thread' },
  { href: './respond.html', label: 'Respond', page: 'respond' },
  { href: './next-steps.html', label: 'Next Steps', page: 'next-steps' },
  { href: './scripture-library.html', label: 'Scripture', page: 'scripture-library' },
];

const footerNav: NavItem[] = [
  { href: './journey.html', label: 'Start the Journey', page: 'journey' },
  { href: './who-is-jesus.html', label: 'Who Is Jesus?', page: 'who-is-jesus' },
  { href: './scarlet-thread.html', label: 'The Scarlet Thread', page: 'scarlet-thread' },
  { href: './respond.html', label: 'Ready to Respond?', page: 'respond' },
  { href: './next-steps.html', label: 'New Believer Next Steps', page: 'next-steps' },
  { href: './scripture-library.html', label: 'Scripture Library', page: 'scripture-library' },
];

const scriptureList = (ids: string[]) =>
  ids
    .map((id) => {
      const scripture = getScriptureById(id);
      return `<li><strong>${scripture.reference}</strong> - ${scripture.text}</li>`;
    })
    .join('');

const sectionPoints = (points: { title: string; summary: string; verseIds: string[] }[]) =>
  points
    .map(
      (point) => `
      <article class="content-card">
        <h3>${point.title}</h3>
        <p>${point.summary}</p>
        <ul class="verse-list">${scriptureList(point.verseIds)}</ul>
      </article>
    `,
    )
    .join('');

function renderNav(items: NavItem[]): string {
  return items
    .map(
      (item) =>
        `<a href="${item.href}" ${item.page === page ? 'aria-current="page" class="is-current"' : ''}>${item.label}</a>`,
    )
    .join('');
}

function pageHome(): string {
  return `
    <section class="hero section-pad" aria-labelledby="hero-title">
      <div class="hero-glow" aria-hidden="true"></div>
      <p class="eyebrow">An interactive path through Scripture to understand the good news of Jesus Christ.</p>
      <h1 id="hero-title">The Gospel Journey</h1>
      <p class="hero-subtitle">Walk through Scripture and discover the good news of Jesus Christ.</p>
      <p class="hero-copy">From creation to the cross, from the empty tomb to a personal response, Gospel Journey helps you understand who Jesus is, why He came, and what it means to trust Him as Savior.</p>
      <div class="hero-actions">
        <a class="button button-primary" href="./journey.html">Start the Journey</a>
        <a class="button button-ghost" href="./who-is-jesus.html">Who Is Jesus?</a>
      </div>
      <div class="journey-preview" aria-label="Journey preview">
        <span>Created for God</span>
        <span>Separated by Sin</span>
        <span>Promised a Savior</span>
        <span>Jesus Came</span>
        <span>Jesus Died</span>
        <span>Jesus Rose</span>
        <span>Respond by Faith</span>
      </div>
      <article class="verse-card key-verse">
        <h2>Key Verse</h2>
        <blockquote>
          “For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.”
        </blockquote>
        <p>John 3:16 (KJV)</p>
      </article>
    </section>

    <section class="section-pad home-blocks" aria-label="Home content blocks">
      <article class="content-card">
        <h2>What Is the Gospel?</h2>
        <p>The Gospel is the good news that Jesus Christ, the Son of God, died for our sins, rose again, and saves all who trust in Him.</p>
      </article>
      <article class="content-card">
        <h2>Why This Journey?</h2>
        <p>Many people know pieces of the Bible but have never seen how the whole story points to Jesus. Gospel Journey walks step by step through Scripture so the message is clear.</p>
      </article>
      <article class="content-card start-where">
        <h2>Start Where You Are</h2>
        <div class="choice-grid">
          <a class="button button-soft" href="./journey.html">I am curious</a>
          <a class="button button-soft" href="./respond.html">I have questions</a>
          <a class="button button-soft" href="./who-is-jesus.html">I want to know Jesus</a>
          <a class="button button-soft" href="./next-steps.html">I recently trusted Christ</a>
        </div>
      </article>
      <article class="content-card">
        <h2>One Story, One Savior</h2>
        <p>From Genesis to Revelation, Scripture tells the story of God’s rescue through Jesus Christ.</p>
      </article>
      <article class="content-card final-message">
        <h2>Come to Jesus</h2>
        <p>You do not have to understand everything to come to Jesus. The Gospel is clear: Christ died for our sins, He rose again, and all who call upon the name of the Lord shall be saved.</p>
      </article>
    </section>

    <section class="section-pad" aria-labelledby="clarity-title">
      <h2 id="clarity-title">Gospel Clarity Cards</h2>
      <p class="section-lead">Simple definitions rooted in Scripture.</p>
      <div class="clarity-grid">
        ${GOSPEL_CLARITY_CARDS.map(
          (card, index) => `
          <details class="clarity-card" ${index === 0 ? 'open' : ''}>
            <summary>${card.title}</summary>
            <p>${card.summary}</p>
            <ul class="verse-list">${scriptureList(card.scriptureIds)}</ul>
          </details>`,
        ).join('')}
      </div>
    </section>
  `;
}

function pageJourney(): string {
  return `
    <section class="section-pad" aria-labelledby="journey-title">
      <h1 id="journey-title">The Gospel Journey</h1>
      <p class="section-lead">God created us for relationship. Sin separated us from God. God promised a Savior. Jesus came. Jesus died for our sins. Jesus rose again. We respond by faith.</p>
      <div class="progress-strip" id="journey-progress-strip" role="list" aria-label="Gospel journey steps"></div>
      <p id="journey-progress" class="progress-copy" aria-live="polite"></p>
      <article id="journey-step-card" class="journey-step-card"></article>
      <p class="note">Important note: The prayer itself is not magic words. What matters is sincere faith in Christ.</p>
    </section>

    <section class="section-pad" aria-labelledby="reflection-title">
      <h2 id="reflection-title">Reflection Box</h2>
      <p class="section-lead">Write what you are seeing, understanding, reflecting, and responding to in this journey.</p>
      <label class="checkbox-row" for="save-toggle">
        <input id="save-toggle" type="checkbox" ${storageEnabled ? 'checked' : ''} />
        Save reflections and progress in this browser
      </label>
      <p class="note">Reflections are stored only in your browser if saving is enabled. No data is sent to any server.</p>
      <label for="reflection-input">Your reflection</label>
      <textarea id="reflection-input" rows="7" placeholder="What is God showing me through Scripture today?"></textarea>
    </section>
  `;
}

function pageJesus(): string {
  return `
    <section class="section-pad" aria-labelledby="jesus-title">
      <h1 id="jesus-title">Who Is Jesus?</h1>
      <p class="section-lead">Jesus is not merely a teacher, prophet, or moral example. He is the Son of God, the promised Savior, crucified for sinners, risen from the dead, and Lord of all.</p>
      <div class="card-grid">${sectionPoints(JESUS_IDENTITY_SECTIONS)}</div>
    </section>
  `;
}

function pageWhySaving(): string {
  return `
    <section class="section-pad" aria-labelledby="why-saving-title">
      <h1 id="why-saving-title">Why Do I Need Saving?</h1>
      <p class="section-lead">Truthful and compassionate: sin is serious, grace is greater, and Jesus is sufficient.</p>
      <div class="truth-card-row">
        <article class="truth-card">Religion says: Do enough. The Gospel says: Jesus has done what you could not do.</article>
        <article class="truth-card">Salvation is not earned. It is received.</article>
        <article class="truth-card">Grace is not God ignoring sin. Grace is God providing a Savior.</article>
      </div>
      <div class="card-grid">${sectionPoints(WHY_NEED_SAVING_SECTIONS)}</div>
    </section>
  `;
}

function pageScarletThread(): string {
  return `
    <section class="section-pad" aria-labelledby="scarlet-title">
      <h1 id="scarlet-title">The Scarlet Thread</h1>
      <p class="section-lead">Follow the promise of redemption from Genesis to Jesus.</p>
      <p class="core-line">The Gospel did not begin in Matthew. The whole Bible tells the story of God’s rescue through Jesus Christ.</p>
      <ol class="timeline">
        ${SCARLET_THREAD_STOPS.map(
          (stop, index) => `
          <li class="timeline-stop">
            <article>
              <p class="timeline-count">Stop ${index + 1}</p>
              <h2>${stop.title}</h2>
              <p class="timeline-ref">${stop.reference}</p>
              <p><strong>What happened?</strong> ${stop.whatHappened}</p>
              <p><strong>What did God promise?</strong> ${stop.promise}</p>
              <button type="button" class="button button-soft reveal-trigger" data-reveal-id="${stop.id}">Reveal how this points to Jesus</button>
              <div id="${stop.id}" class="reveal-panel" hidden>
                <p><strong>How does this point to Jesus?</strong> ${stop.pointsToJesus}</p>
                <p><strong>What does this mean for me?</strong> ${stop.meansForMe}</p>
              </div>
            </article>
          </li>`,
        ).join('')}
      </ol>
    </section>
  `;
}

function pageRespond(): string {
  return `
    <section class="section-pad" aria-labelledby="respond-title">
      <h1 id="respond-title">Ready to Respond?</h1>
      <p class="section-lead">If you understand that you have sinned, believe that Jesus died for your sins and rose again, and want to trust Him as your Savior, you can call on Him now.</p>
      <article class="verse-card">
        <h2>Prayer of Response</h2>
        <p>Lord Jesus, I know that I have sinned and need forgiveness. I believe You died for my sins and rose again. I cannot save myself. I trust You as my Savior and Lord. Please forgive me, make me new, and lead my life from this day forward. Amen.</p>
      </article>
      <p class="note">This prayer is not a formula or magic words. What matters is sincere faith in Jesus Christ.</p>
      <ul class="verse-list">${scriptureList(['rom-10-9-13', 'john-1-12', 'acts-16-31', 'eph-2-8-9'])}</ul>
      <div class="choice-grid response-choices" role="group" aria-label="Response options">
        <button type="button" class="button button-soft response-option" data-response="trust">I want to trust Jesus</button>
        <button type="button" class="button button-soft response-option" data-response="learn">I want to learn more</button>
        <button type="button" class="button button-soft response-option" data-response="questions">I have questions</button>
        <button type="button" class="button button-soft response-option" data-response="prayed">I prayed and want next steps</button>
      </div>
      <p id="response-guidance" class="response-guidance" aria-live="polite">Choose an option to receive guidance.</p>
    </section>
  `;
}

function pageNextSteps(): string {
  return `
    <section class="section-pad" aria-labelledby="next-steps-title">
      <h1 id="next-steps-title">I Trusted Christ. What Now?</h1>
      <p class="section-lead">You are not saved by growing perfectly. You grow because Christ has saved you.</p>
      <div class="card-grid">
        ${NEXT_STEPS.map(
          (step) => `
          <article class="content-card">
            <h2>${step.title}</h2>
            <p>${step.summary}</p>
            <ul class="verse-list">${scriptureList(step.verseIds)}</ul>
          </article>`,
        ).join('')}
      </div>
    </section>
  `;
}

function pageScriptureLibrary(): string {
  return `
    <section class="section-pad" aria-labelledby="library-title">
      <h1 id="library-title">Scripture Library</h1>
      <p class="section-lead">Scripture organized by theme with plain meaning, reflection, and prayer.</p>
      <p class="translation-banner">Scripture translation default: KJV. Loaded passages: ${SCRIPTURES.length}.</p>
      <div class="library-grid">
        ${SCRIPTURE_LIBRARY.map(
          (theme) => `
          <article class="content-card">
            <h2>${theme.theme}</h2>
            ${theme.scriptureIds
              .map((id) => {
                const scripture = getScriptureById(id);
                return `
                  <div class="library-item">
                    <h3>${scripture.reference}</h3>
                    <p>${scripture.text}</p>
                    <p><strong>Plain meaning:</strong> ${scripture.plainMeaning}</p>
                    ${scripture.reflectionQuestion ? `<p><strong>Reflection:</strong> ${scripture.reflectionQuestion}</p>` : ''}
                    ${scripture.prayerPrompt ? `<p><strong>Prayer:</strong> ${scripture.prayerPrompt}</p>` : ''}
                  </div>
                `;
              })
              .join('')}
          </article>`,
        ).join('')}
      </div>
    </section>
  `;
}

function pagePrayerResponse(): string {
  return `
    <section class="section-pad" aria-labelledby="prayer-title">
      <h1 id="prayer-title">Turn Scripture Into Prayer</h1>
      <p class="section-lead">Respond to God's Word personally with faith and honesty.</p>
      <div class="card-grid">
        ${PRAYER_PROMPTS.map(
          (prompt) => `
          <article class="content-card">
            <h2>${prompt.title}</h2>
            <p><strong>${prompt.verse}</strong></p>
            <blockquote>${prompt.verseText}</blockquote>
            <p><strong>Prayer:</strong> ${prompt.prayer}</p>
          </article>`,
        ).join('')}
      </div>
    </section>
  `;
}

function pageAbout(): string {
  return `
    <section class="section-pad" aria-labelledby="about-title">
      <h1 id="about-title">About Gospel Journey</h1>
      <p class="section-lead">Gospel Journey was created to help people understand the good news of Jesus Christ through Scripture. It is designed as a calm, clear, mobile-first path for seekers, new believers, and anyone who wants to understand how the Bible points to Jesus.</p>
      <ul class="about-list">
        <li>This is not a replacement for church.</li>
        <li>This is not a replacement for pastoral care.</li>
        <li>This is an invitation to open Scripture and consider Christ.</li>
        <li>Please connect with a faithful local church.</li>
      </ul>
      <article class="verse-card privacy-card">
        <h2>Privacy</h2>
        <p>No tracking, no analytics, no accounts, and no personal data collection by default.</p>
        <p>If enabled, progress is stored only in this browser using local storage.</p>
      </article>
      <article class="verse-card share-card">
        <h2>Share This Journey</h2>
        <p>${shareText}</p>
        <button id="copy-share" class="button button-soft" type="button">Copy Share Text</button>
        <p id="copy-status" class="small-note" aria-live="polite"></p>
      </article>
    </section>
  `;
}

function renderPageContent(): string {
  switch (page) {
    case 'journey':
      return pageJourney();
    case 'who-is-jesus':
      return pageJesus();
    case 'why-saving':
      return pageWhySaving();
    case 'scarlet-thread':
      return pageScarletThread();
    case 'respond':
      return pageRespond();
    case 'next-steps':
      return pageNextSteps();
    case 'scripture-library':
      return pageScriptureLibrary();
    case 'prayer-response':
      return pagePrayerResponse();
    case 'about':
      return pageAbout();
    case 'home':
    default:
      return pageHome();
  }
}

app.innerHTML = `
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <header class="site-header">
    <div class="header-shell">
      <a class="brand-kicker" href="./index.html" aria-label="Gospel Journey Home">Gospel Journey</a>
      <button class="menu-button" id="menu-button" aria-expanded="false" aria-controls="main-nav">Menu</button>
      <nav id="main-nav" class="main-nav" aria-label="Primary">
        ${renderNav(primaryNav)}
      </nav>
    </div>
  </header>

  <main id="main-content" tabindex="-1">
    ${renderPageContent()}
  </main>

  <footer class="site-footer">
    <div>
      <h2>Gospel Journey</h2>
      <p>An interactive path through Scripture to understand the good news of Jesus Christ.</p>
      <blockquote>“For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth...”</blockquote>
      <p>Romans 1:16 (KJV)</p>
    </div>
    <nav class="footer-links" aria-label="Footer">
      ${renderNav(footerNav)}
    </nav>
  </footer>
`;

function setupMenu(): void {
  const menuButton = document.querySelector<HTMLButtonElement>('#menu-button');
  const nav = document.querySelector<HTMLElement>('#main-nav');

  menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav?.classList.toggle('open', !expanded);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
}

function setupJourneyPage(): void {
  if (page !== 'journey') {
    return;
  }

  let currentStep = Number.parseInt(localStorage.getItem(STORAGE_KEYS.progress) ?? '0', 10);

  if (Number.isNaN(currentStep) || currentStep < 0 || currentStep >= GOSPEL_STEPS.length) {
    currentStep = 0;
  }

  const persistProgress = () => {
    if (localStorage.getItem(STORAGE_KEYS.saveEnabled) === 'true') {
      localStorage.setItem(STORAGE_KEYS.progress, String(currentStep));
    }
  };

  const renderJourneyStep = () => {
    const step = GOSPEL_STEPS[currentStep];
    const progress = document.querySelector<HTMLElement>('#journey-progress');
    const card = document.querySelector<HTMLElement>('#journey-step-card');
    const strip = document.querySelector<HTMLElement>('#journey-progress-strip');

    if (!progress || !card || !strip) {
      return;
    }

    strip.innerHTML = GOSPEL_STEPS.map(
      (item, index) =>
        `<span class="progress-pill ${index <= currentStep ? 'is-active' : ''}" role="listitem" aria-current="${index === currentStep ? 'step' : 'false'}">${index + 1}. ${item.title}</span>`,
    ).join('');

    progress.textContent = `Step ${currentStep + 1} of ${GOSPEL_STEPS.length} - ${step.title}`;

    card.innerHTML = `
      <h2>${step.title}</h2>
      <p class="journey-idea">${step.mainIdea}</p>
      <div class="journey-rhythm">
        <p><strong>See:</strong> ${step.mainIdea}</p>
        <p><strong>Understand:</strong> ${step.explanation}</p>
        <p><strong>Reflect:</strong> ${step.reflectionQuestion}</p>
        <p><strong>Respond:</strong> ${step.prayerResponse}</p>
      </div>
      <ul class="verse-list">${scriptureList(step.verseIds)}</ul>
      <div class="step-actions">
        <button class="button button-soft" id="prev-step" type="button" ${currentStep === 0 ? 'disabled' : ''}>Previous Step</button>
        <button class="button button-primary" id="next-step" type="button">${currentStep === GOSPEL_STEPS.length - 1 ? 'Begin Again' : 'Continue the Journey'}</button>
      </div>
    `;

    document.querySelector<HTMLButtonElement>('#next-step')?.addEventListener('click', () => {
      if (currentStep === GOSPEL_STEPS.length - 1) {
        currentStep = 0;
      } else {
        currentStep += 1;
      }
      persistProgress();
      renderJourneyStep();
    });

    document.querySelector<HTMLButtonElement>('#prev-step')?.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep -= 1;
        persistProgress();
        renderJourneyStep();
      }
    });
  };

  renderJourneyStep();

  const reflectionInput = document.querySelector<HTMLTextAreaElement>('#reflection-input');
  const saveToggle = document.querySelector<HTMLInputElement>('#save-toggle');

  if (reflectionInput) {
    reflectionInput.value = storageEnabled ? localStorage.getItem(STORAGE_KEYS.reflection) ?? '' : '';
    reflectionInput.addEventListener('input', () => {
      if (localStorage.getItem(STORAGE_KEYS.saveEnabled) === 'true') {
        localStorage.setItem(STORAGE_KEYS.reflection, reflectionInput.value);
      }
    });
  }

  saveToggle?.addEventListener('change', () => {
    localStorage.setItem(STORAGE_KEYS.saveEnabled, String(saveToggle.checked));
    if (saveToggle.checked) {
      localStorage.setItem(STORAGE_KEYS.progress, String(currentStep));
      if (reflectionInput) {
        localStorage.setItem(STORAGE_KEYS.reflection, reflectionInput.value);
      }
    }
  });
}

function setupScarletThread(): void {
  if (page !== 'scarlet-thread') {
    return;
  }

  document.querySelectorAll<HTMLButtonElement>('.reveal-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const revealId = button.dataset.revealId;
      if (!revealId) {
        return;
      }
      const panel = document.getElementById(revealId);
      const hidden = panel?.hasAttribute('hidden');

      if (!panel) {
        return;
      }

      if (hidden) {
        panel.removeAttribute('hidden');
        button.textContent = 'Hide this connection';
      } else {
        panel.setAttribute('hidden', 'true');
        button.textContent = 'Reveal how this points to Jesus';
      }
    });
  });
}

function setupResponsePage(): void {
  if (page !== 'respond') {
    return;
  }

  document.querySelectorAll<HTMLButtonElement>('.response-option').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.response as keyof typeof RESPONSE_OPTIONS;
      const guidance = document.querySelector<HTMLElement>('#response-guidance');
      if (guidance) {
        guidance.textContent = RESPONSE_OPTIONS[key] ?? 'Keep walking through Scripture one step at a time.';
      }
    });
  });
}

function setupAboutPage(): void {
  if (page !== 'about') {
    return;
  }

  document.querySelector<HTMLButtonElement>('#copy-share')?.addEventListener('click', async () => {
    const status = document.querySelector<HTMLElement>('#copy-status');
    try {
      await navigator.clipboard.writeText(shareText);
      if (status) {
        status.textContent = 'Share text copied.';
      }
    } catch {
      if (status) {
        status.textContent = 'Clipboard is unavailable. You can copy the text manually above.';
      }
    }
  });
}

setupMenu();
setupJourneyPage();
setupScarletThread();
setupResponsePage();
setupAboutPage();

document.documentElement.lang = 'en';