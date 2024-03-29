import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className='app__header section__padding app__wrapper' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new Flavour' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        reprehenderit eveniet, quos quis corrupti cum, error labore laboriosam
        accusamus incidunt, delectus et doloribus distinctio ea. Quidem magnam
        obcaecati quod ullam?
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>

    <div className='app__wrapper_img '>
      <img src={images.welcome} alt='header-img' />
    </div>
  </div>
);

export default Header;
