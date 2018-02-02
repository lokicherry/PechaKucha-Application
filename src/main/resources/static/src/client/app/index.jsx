import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component{
    render(){
        return(<div id="timerBackground">
                <button id="buttonStart" onClick={startTimer}>START</button>
            </div>
        )
    }
    componentWillMount(){
    }
}

ReactDOM.render(<App />, document.getElementById("container1"));

function startTimer() {

    class AfterClickingTimerStart extends React.Component{
        render(){
            return(
                <div id="container3" className="container3">
                    <div id="timerSubmit">
                        <label htmlFor="nameofpresentor">Name of the Presentor:</label>
                        <input type="text" name="nameofpresentor" id="nameofpresentor" placeholder="Your Name" ></input>
                        <br/>
                        <label htmlFor="titleOfPPT">Title of Presentation:</label>
                        <input type="text" name="titleOfPPT" id="titleOfPPT" placeholder="Your Presentaion Title" ></input>
                        <br/>
                        <label htmlFor="noOfSlidesInPPT">No of slides in Presentation:</label>
                        <select name='noOfSlides' id='noOfSlidesInPPT' ref="noOfSlidesInPPT">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20' selected>20</option>
                        </select>
                        <button id="timerStartButton" onClick={startingTimer}>START</button>
                    </div>
                </div>)
        }

    }

    ReactDOM.render(<AfterClickingTimerStart/>,document.getElementById("container"));
}

function startingTimer() {
    var noOfSlides = document.getElementById("noOfSlidesInPPT").value;
    var titleOfPPT = document.getElementById("titleOfPPT").value;
    var nameofthepresntor = document.getElementById("nameofpresentor").value;
    const Time = noOfSlides * 20;

    class StartingTimerForPresentation extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                noOfSlides: noOfSlides,
                titleOfPPT: titleOfPPT,
                nameofthepresntor:nameofthepresntor,
                timeleft: Time,
                timeSet: Time,
                intervalId: '',
                ispaused:'false',
                isreset:'false',
            };
        }

        render() {
            let timeleft = this.state.timeleft;
            let timeset = this.state.timeSet;
            let minutes = timeleft/60;
            minutes=parseInt(minutes,10);
            let seconds = timeleft-(minutes*60);
            let presentSlide = (timeset-timeleft)/20;
            presentSlide=parseInt(presentSlide,10)+1;
            let slidesleft = this.state.noOfSlides-presentSlide;
            let PauserButton;
            let ResetButton;
            if(this.state.ispaused=="false"){
                PauserButton = "PAUSE";
            }
            else{
                PauserButton = "RESUME";
            };
            if(this.state.isreset=="false"){
                ResetButton = "RESET";
            }
            else{
                ResetButton = "START";
            };

            return (<div>
                    <div id="timerWatch">
                        <div id="minutes"><h1>{minutes}</h1></div>
                        <div id="seconds"><h1>{seconds}</h1></div>
                    </div>
                    <div id="detailsOfPPT">
                        <div id="displayName">Name Of The Presentor:{this.state.nameofthepresntor}</div>
                        <div id="displayTitle">Title:{this.state.titleOfPPT}</div>
                        <div id="currentSlide">You are on : {presentSlide} Slides</div>
                        <div id="slidesLeft">No Of Slides Left : {slidesleft} </div>
                        <button id="pauseTimer"  onClick={this.pauseTimer.bind(this)}>{PauserButton}</button>
                        <button id="resetTimer"  onClick={this.resetTimer.bind(this)}>{ResetButton}</button>
                    </div>
                </div>

            )
        }
        componentDidUpdate(){
            if(this.state.timeleft==0){
                console.log("in component did update");
                timeUp();
                function timeUp(){
                    var timerWatchElement = document.getElementById("timerWatch");
                    console.log(timerWatchElement.innerHTML);
                    timerWatchElement.innerHTML = "<div id='timeUp'> <div><h1>TIME UP</h1></div> <a href='feedback.html'>Wanna Take Feedback?</a></div>";
                }
            }}

        pauseTimer(){

            if(this.state.ispaused=="false") {
                console.log("in if");
                clearInterval(this.state.intervalId);
                this.setState({ispaused:"true"});
            }
            else{
                console.log("in else");
                this.setState({ispaused:"false"});
                let intervalId = setInterval(this.updateTime.bind(this), 1000);
                this.setState({intervalId:intervalId});

            }
        }
        resetTimer(){

            if(this.state.isreset=="false") {
                console.log("in reset if ");
                clearInterval(this.state.intervalId);
                this.setState({timeleft:this.state.timeSet});
                this.setState({isreset:"true"});
            }
            else{
                console.log("in reset else");
                this.setState({isreset:"false"});
                let intervalId = setInterval(this.updateTime.bind(this), 1000);
                this.setState({intervalId:intervalId});

            }
        }
        componentDidMount() {
            console.log("in component did mount");
            let intervalId = setInterval(this.updateTime.bind(this), 1000);
            this.setState({intervalId:intervalId})
        }

        componentWillUnmount() {
            clearInterval(this.state.intervalId);
        }

        updateTime() {


            if(this.state.timeleft>0){
                this.setState({timeleft: this.state.timeleft - 1});
            }

            else {
                clearInterval(this.state.intervalId);
            }

        }

    }
    ReactDOM.render(<StartingTimerForPresentation/>,document.getElementById("container"));
}


class FirstPageFeedback extends React.Component{
    render(){
        return(
            <div id="feedback">
                <a href='feedback.html'>
                    <div id="feedbackDiv">Feedback</div>
                </a>
            </div>
        )
    }
}
ReactDOM.render(<FirstPageFeedback/>,document.getElementById("container2"));





/*
function startingTimer () {
    var noOfSlides = document.getElementById("noOfSlidesInPPT").value;
    var titleOfPPT = document.getElementById("titleOfPPT").value;
    console.log(noOfSlides);
    console.log(titleOfPPT);
    class StartingTimerForPresentation extends React.Component {
        constructor(props){
            super(props)
            this.state={
                noOfSlides:noOfSlides,
                titleOfPPT:titleOfPPT,
                count:0,

            }

        }
        componentDidMount(){
            setInterval(this.updateCanvas(),1000);

        }
        componentDidUpdate(){
            setInterval(this.updateCanvas(),1000);
        }

        updateCanvas() {
            var canvas = this.refs.canvas;
            var ctx = canvas.getContext("2d");
            var cw = canvas.width;
            var ch = canvas.height;
            var radius = canvas.height/2;
            radius = radius*0.9;
            drawFirstCircle();
            function drawFirstCircle() {
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.moveTo(cw/2,cw/2);
                ctx.arc(cw/2, ch/2, radius, 0, 2*Math.PI, false);
                ctx.closePath();
                ctx.fill();

            }
            var angleForSecondinDegrees = 360/(this.state.noOfSlides*20);
            var angle = (Math.PI/180)*angleForSecondinDegrees;

            function drawSecondCircle() {
               this.setState({count:this.state.count+1});
                console.log(count);
                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.moveTo(cw/2,cw/2);
                ctx.arc(cw/2, ch/2, radius, 0, angle*this.state.count, false);
                ctx.closePath();
                ctx.fill();

            }
        }
        render(){
            return(
                <div>
                        <div>
                            <div className="timerClock">
                                <canvas ref="canvas" width={300} height={300}></canvas>
                            </div>
                            <div className="detailsOfPPT"></div>
                        </div>
                </div>
            )
        }


    }
    ReactDOM.render(<StartingTimerForPresentation/>,document.getElementById("container"));

}
*/