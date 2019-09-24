import React, { Component } from 'react';
import {randomInt, findMinimum } from './utils';

class MergeSort extends Component {
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
        for(let i=0; i<15; i++) {
            newIntegers[i] = [];
            while ( newIntegers[i].length < 60) {
                let randomNumber = randomInt(60,4);
                if (!newIntegers[i].includes(randomNumber)) {
                    newIntegers[i].push(randomNumber);
                } 
            }
        }    
        this.setState({
            Integers: newIntegers,
        })
    }
    handleSort = (colorArray, index) => {
        if (colorArray.length <= 1) {
            return colorArray;
        }
        let middleElement = Math.floor(colorArray.length/2);
        let left = colorArray.slice(0, middleElement);
        let right = colorArray.slice(middleElement);
        return this.merge(this.handleSort(left), this.handleSort(right), index);
    }

    merge = (left, right, index) => {
        let resultArray = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
          } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
          }
          setTimeout(()=>{
              let newIntegers = [...this.state.Integers];
              newIntegers[index] = newResult;
              this.setState({
                  Integers: newIntegers,
              })    
          },1)
        }
        let newResult = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
        return newResult;
    }

    handleAllSort = (e) => {
        e.persist();
        for (let i=0; i<this.state.Integers.length; i++){
            this.handleSort(this.state.Integers[i],i);
        }

    }
    createAllColors = (listOfIntegers) => {
        let allBlocks = [];
        for (var i=0; i< listOfIntegers.length; i++){
            allBlocks.push(<div className="blockRow">{this.createColorBlocks(listOfIntegers[i])}</div>);
        }
        return allBlocks;
    }
    createColorBlocks = (array)=>{
        let blocks = [];
            for(var i=0; i<array.length;i++) {
                blocks.push(<div style={{display:'inline-block',width:'1.6666%',height: '1.3vw',backgroundColor:`hsl(${ array[i] },100%,50%)`}}></div>)
            }
        return blocks;
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
                <h1>Merge Sort</h1>
                <h2>Divide the input into two halves. Call the same function for both halves then merge the sorted halves. Merge Sort is a divide and conquer algorithm and is very efficient.</h2>
                <ul className="unorderedList">
                    <li>Worst complexity: O(n*log(n))</li>
                    <li>Average complexity: O(n*log(n))</li>
                    <li>Best complexity: O(n*log(n)</li>
                    <li>Space complexity: O(n)</li>
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
export default MergeSort;