const about = document.getElementById('about-page');
const blog = document.getElementById('blog-page');
const more = document.getElementById('more-projects');
const show = document.getElementById('show-projects');
function renderPage() {
  const page = location.hash.slice(1) || 'about';
  const isBlog = page === 'blog';
  about.hidden = isBlog;
  blog.hidden = !isBlog;
  document.title = (isBlog ? 'Blog | ' : '') + 'Shagiththiah Kirupakaran';
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link.dataset.page === (isBlog ? 'blog' : page === 'projects' ? 'projects' : 'about')) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (page === 'projects') document.getElementById('projects-section').scrollIntoView();
  else window.scrollTo({top: 0});
}
show.addEventListener('click', () => {
  more.hidden = !more.hidden;
  show.setAttribute('aria-expanded', String(!more.hidden));
  show.textContent = more.hidden ? 'Show all' : 'Show less';
});
window.addEventListener('hashchange', renderPage);
renderPage();
