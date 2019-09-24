import React, { Component } from 'react';

class SelectionSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
  render() {
    return (
        <div className="navbar">
            <a href="/selection">Selection Sort</a>
            <a href="google.com">Bubble Sort</a>
            <a href="google.com">Insertion Sort</a>
            <a href="google.com">Quick Sort</a>
            <a href="google.com">Heap Sort</a>
            <a href="/merge">Merge Sort</a>
            <a href="google.com">Bucket Sort</a>
            <a href="google.com">Radix Sort</a>
        </div>
    );
  }
}
export default SelectionSort;