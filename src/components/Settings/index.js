import { connect } from "react-redux";
import Settings from "./Settings";

const mapStateToProps = state => {
    return {
        inProgress: state.inProgress,
    };
};

export default connect(mapStateToProps)(Settings);