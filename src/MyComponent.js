const MyComponent = props => {
    return (<div>안녕하세요 {props.name} 입니다.<br/>
    children값도 있어요 {props.children}
    </div>);
};

MyComponent.defaultProps = {
    name: "기본이름"
};

export default MyComponent;



