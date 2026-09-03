import { useState } from 'react';
import { Icon } from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import './footer.css';

export function Footer() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`footerWrapper${isOpen ? ' open' : ''}`}>
      <button
        type="button"
        className="footerTab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="siteFooter"
        aria-label={isOpen ? "Hide site info" : "Show site info"}
      >
        <Icon path={mdiChevronUp} size={0.9} />
      </button>

      <footer id="siteFooter">
        <p>
          <small>
            Designed And Developed by Matthew Harview
            <span className='socialLink'>
              | GitHub <a href='https://github.com/Long-Hold'><i className="devicon-github-original"></i></a>
              | Source Code <a href='https://github.com/Long-Hold/odin-cv-application'><i className="devicon-git-plain"></i></a>
              |
            </span>
          </small>
        </p>
      </footer>
    </div>
  )
}