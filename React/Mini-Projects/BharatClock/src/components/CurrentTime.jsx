let currentT = new Date();

function CurrentTime(){
    return <div>
        <p className="lead">
            This is the current time : {currentT.toLocaleDateString()} - {currentT.toLocaleTimeString()}
             </p>
    </div>
}

export default CurrentTime;