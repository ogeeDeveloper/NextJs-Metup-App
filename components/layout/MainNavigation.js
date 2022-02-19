import classes from './MainNavigation.module.css';
import Link from "next/link"

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
    </header>
  );
}

export default MainNavigation;
