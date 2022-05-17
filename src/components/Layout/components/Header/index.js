import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo}></img>
        </div>
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx('clear')}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button className={cx('loading')}>
            <i className="fa-solid fa-spinner"></i>
          </button>
          <button className={cx('search-btn')}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
