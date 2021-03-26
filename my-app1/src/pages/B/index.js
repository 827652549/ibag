import {useEffect} from 'react'
import {actionCreators} from './store'
import {connect} from "react-redux";
function B(props) {
      useEffect(()=>{
    const { handleChangeNum1,handleChangeNum2} = props;
    handleChangeNum1(1)
    handleChangeNum2(2)
  })
  return (
    <div>
      page B
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
   name:state.name
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeNum1(num) {
      const action = actionCreators.changeNum1(num);
      dispatch(action);
    },
    handleChangeNum2(num) {
      const action = actionCreators.changeNum2(num);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(B);
