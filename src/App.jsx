import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageHoc from './components/LikeImageHoc';
import LikePost from './components/LikePost';
import LikePostHoc from './components/LikePostHoc';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>

      <h3>My Blog</h3>

      {/* Render */}

      <div className='buttons'>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncreament}/>}}/>

        <Wrapper render={(counter, handleIncreament)=>{
          return <LikePost LikePostCounter={counter} handlePostCount = {handleIncreament}/>}}/>
      </div>


{/* HOC */} 

      <div className='buttons'>
        <LikeImageHoc/>
        <LikePostHoc/>
      </div>

    </div>
  );
}

export default App;
