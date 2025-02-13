import Header from "./header";
import Footer from "./footer";
import Main from "../../routers/main";

export default function MasterLayout() {
  return (
    <>
      <div id="home">
        <Header />
      </div>

      <Main />

      <div>
        <Footer />
      </div>
    </>
  );
}

// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from '../../app/actions';
// import { RootState, AppDispatch } from '../../app/store';

// const Counter = () => {
//   // Access the counter state using useSelector
//   const count = useSelector((state: RootState) => state.counter.count);

//   // Access dispatch function with correct types
//   const dispatch: AppDispatch = useDispatch();

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;
