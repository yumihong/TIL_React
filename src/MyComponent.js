import PropTypes from 'prop-types';

const MyComponent = ({name, children, number}) => {
    return (
        <div>
            안녕하세요 {name} 입니다.<br/>
            children값도 있어요 {children}<br/>
            이번엔 필수값을 지정할거예요 {number}
        </div>
    );
};

MyComponent.defaultProps = {
    name: "기본이름"
};

MyComponent.prototype = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired
};

export default MyComponent;



