import './Onboarding.css'
import { useNavigate } from 'react-router-dom';

function Onboarding() {

  const navigate = useNavigate();

  const handleButtonHome = () => {
    navigate('/home');
  };

  // const buttons = document.querySelectorAll('.btn');
  // buttons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     button.classList.add('active');
  //     alert('Button clicked!');
  //   });
  // });



  return (
    <>
      <div id="container">
        <div id='content'>
          <div className='maintext'>
            What news do <span id='underline'> you </span> want to see?
          </div>

          <div id='options'>
          
          <div className='buttonbox'>

            <div className='category'>Category 1</div>
            <div className='buttonlayout'>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 1</label>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 2</label>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 3</label>
            </div>
          </div>

          <div className='buttonbox'>
          <div className='category'>Category 2</div>
          <div className='buttonlayout'>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 1</label>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 2</label>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 3</label>
            </div>
          </div>

          <div className='buttonbox'>
          <div className='category'>Category 3</div>
          <div className='buttonlayout'>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 1</label>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 2</label>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 3</label>
            </div>
          </div>

          <div className='buttonbox'>
          <div className='category'>Category 4</div>
          <div className='buttonlayout'>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 1</label>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 2</label>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"/>
            <label class="btn" for="btn-check-4">Button 3</label>
            </div>
          </div>

          </div>

        </div>

        <button onClick={handleButtonHome} id='next'>Next</button>

    </div>
    </>
  )
}

export default Onboarding
