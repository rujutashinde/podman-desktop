import { usePluginData } from '@docusaurus/useGlobalData';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GitHubMetadata } from '@site/src/plugins/github-metadata';

<<<<<<< HEAD
export function GitHubStarsButton(): JSX.Element {
  const { stargazersCount } = usePluginData('docusaurus-plugin-github-metadata') as GitHubMetadata;
=======
export function GitHubStarsButton({ mobile = false }: { readonly mobile?: boolean }): JSX.Element {
  const stars = useGitHubStars('podman-desktop/podman-desktop');
>>>>>>> f2bd0cb8e38 (fix(website): add github button to the mobile menu)

  return (
    <a
      href="https://github.com/podman-desktop/podman-desktop"
      target="_blank"
      rel="noopener noreferrer"
      // check for mobile or large screen
      className={
        mobile
          ? 'dropdown__link flex items-center gap-2 px-4 py-2 font-medium'
          : 'navbar__item navbar__link hidden lg:flex items-center gap-2 px-4 py-[9px] border border-black dark:border-white rounded-lg font-medium min-w-[9rem]'
      }>
      <FontAwesomeIcon icon={faGithub} />
      <span>Star</span>
<<<<<<< HEAD
      <span
        id="github-stars-badge"
        className="ml-2 px-2 py-1 bg-charcoal-300 rounded text-white text-xs min-w-[2.5rem] text-center">
        {stargazersCount >= 1000 ? `${(stargazersCount / 1000).toFixed(1)}k` : `${stargazersCount}`}
      </span>
=======
      {stars && (
        <span className="ml-2 px-2 py-1 bg-charcoal-300 rounded text-white text-xs min-w-[2.5rem] text-center">
          {stars}
        </span>
      )}
>>>>>>> f2bd0cb8e38 (fix(website): add github button to the mobile menu)
    </a>
  );
}
