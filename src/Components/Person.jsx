function Person({ name="Ram", age=5 }){
    return(
        <>
            <p>Hello, {name} Welcome to Page! <br />
                Your age is {age}.
            </p>
        </>
    );
}

export default Person;