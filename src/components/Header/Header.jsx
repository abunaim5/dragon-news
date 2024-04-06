import moment from 'moment';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className='text-center mt-14'>
            <img className='mx-auto mb-5' src={logo} alt="" />
            <p className='text-lg text-[#706F6F] mb-3'>Journalism Without Fear or Favour</p>
            <div className='text-xl font-medium text-[#403F3F]'>
                {
                    moment().format('dddd MMMM DD, YYYY')
                }
            </div>
        </div>
    );
};

export default Header;