/*
Reversed Strings

Description:
	Complete the solution so that is reverses the string passed into it.

	Example:
		'world'  =>  'dlrow'
		'word'   =>  'drow'
*/

function solution(str){
	const reversedStr = str.split('').reverse().join('');
	return reversedStr
	}