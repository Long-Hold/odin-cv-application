import './footer.css';

export function Footer() {
  return (
    <footer>
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
  )
}