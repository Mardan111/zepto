const featurePills = document.querySelectorAll('.feature-pill');
const previewTitle = document.querySelector('#previewTitle');
const previewText = document.querySelector('#previewText');
const previewMetric = document.querySelector('#previewMetric');

const featureContent = {
  intelligence: {
    title: 'Agentic intelligence',
    text: 'Zepto orchestrates workflows, insights, and automation across your business with adaptive intelligence.',
    metric: '98% faster decisions'
  },
  security: {
    title: 'Secure-by-design',
    text: 'Enterprise-grade protection, policy controls, and resilient architecture are built into every layer.',
    metric: '24/7 threat monitoring'
  },
  scale: {
    title: 'Scale without friction',
    text: 'Deploy global experiences with observability, flexibility, and performance tuned for momentum.',
    metric: '3x global expansion'
  }
};

featurePills.forEach((pill) => {
  pill.addEventListener('click', () => {
    featurePills.forEach((item) => item.classList.remove('active'));
    pill.classList.add('active');

    const selected = featureContent[pill.dataset.feature];
    previewTitle.textContent = selected.title;
    previewText.textContent = selected.text;
    previewMetric.textContent = selected.metric;
  });
});

const counter = document.querySelector('#counterValue');
let count = 0;

const tick = () => {
  count += 1;
  counter.textContent = `${count}k+`;
  if (count < 42) {
    setTimeout(tick, 45);
  }
};

tick();
