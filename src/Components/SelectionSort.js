import React, { Component } from 'react';
import {randomInt, findMinimum} from './utils';

class SelectionSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Integers: [],
            isSorting: false,
        }
    }
    componentDidMount = () => {
        this.createRandomIntegers();
    }
    createRandomIntegers = () => {
        let newIntegers = [];
        for(let i=0; i<20; i++) {
            newIntegers[i] = {randomIntegers: [], sortedIntegers: []};
            while ( newIntegers[i].randomIntegers.length < 60) {
                let randomNumber = randomInt(60,4);
                if (!newIntegers[i].randomIntegers.includes(randomNumber)) {
                    newIntegers[i].randomIntegers.push(randomNumber);
                } 
            }
        }    
        this.setState({
            Integers: newIntegers,
        })
    }
    handleSort = (colorObj,index) => {
        if(colorObj.randomIntegers.length === 0) {
            this.setState({
                isSorting: false,
            })
            return;
        }
        setTimeout(()=>{
            let minimumElement = findMinimum(colorObj.randomIntegers);
            let array = [...colorObj.randomIntegers].filter((item)=>{
                return item !== minimumElement
            })
            let sortedArray = [...colorObj.sortedIntegers]
            sortedArray.push(minimumElement);
            let allIntegers = [...this.state.Integers];
            allIntegers[index] = {
                randomIntegers: array,
                sortedIntegers: sortedArray,
            }
            this.setState({
                Integers: allIntegers,
            })
            this.handleSort(this.state.Integers[index],index);
        },1)  
    }
    handleAllSort = (e) => {
        e.persist();
        if(this.state.isSorting == true) {
            return;
        }
        this.setState({
            isSorting: true,
        })
        for (var i=0; i<this.state.Integers.length; i++){
            this.handleSort(this.state.Integers[i], i);
        }
    }
    findMinimum = (array) => {
        return(Math.min(...array));
    }
    createColorBlocks = (array) => {
        let blocks = [];
            for(var i=0; i<array.length;i++) {
                blocks.push(<div style={{display:'inline-block',width:'1.6666%',height: '1.3vw',backgroundColor:`hsl(${ array[i] },100%,50%)`}}></div>)
            }
        return blocks;
    }
    createAllColors = (listOfObjects) => {
        let allBlocks = [];
        for (var i=0; i< listOfObjects.length; i++){
            allBlocks.push(<div className="blockRow">{this.createColorBlocks(listOfObjects[i].sortedIntegers)}{this.createColorBlocks(listOfObjects[i].randomIntegers)}</div>);
        }
        return allBlocks;
    }
    conditionalButtonRender = () => {
        if (this.state.isSorting) {
            return (<button onClick={this.handleAllSort}>Click to Start</button>)
        } else {
            return (
                <>
                    <button onClick={this.handleAllSort}>Click to Start</button>
                    <button onClick={this.createRandomIntegers}>Refresh</button>
                </>
                )
        }
    }
  render() {
    return (
        <div className='sortPageContainer flexCenterColumn'>
            <div className='flexCenterColumn'>
                <h1>Selection Sort</h1>
                <h2>Create two sublists, sorted and unsorted. At each iteration, find the minimum value of the unsorted list and move it to the sorted list. Simple to understand but not efficient for large lists.</h2>
                <ul className="unorderedList">
                    <li>Worst complexity: O(n^2)</li>
                    <li>Average complexity: O(n^2)</li>
                    <li>Best complexity: O(n^2)</li>
                    <li>Space complexity: O(1)</li>
                </ul>
            </div>
            <div className="mainBody">
                <div className="buttonContainer">
                    {this.conditionalButtonRender()}
                </div>
                {this.createAllColors(this.state.Integers)}
            </div>
        </div>
    );
  }
}
export default SelectionSort;