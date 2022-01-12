function isPalindrome(number)
{
	
	let string = number.toString()
	let stringArray = string.split("")
	let reverseStringArray = []


	for (i = stringArray.length - 1; i >= 0; i--)
	{
		reverseStringArray.push((stringArray[i]))
	}

	let reverseString = reverseStringArray.join("")
	
	if (string === reverseString)
		return true
	else
		return false
}

function largestNumericaPalindrome(n)
{
	let nDigitNumbers = [] 
	for (let i = Math.pow(10, n - 1); i < Math.pow(10, n); i++)
	{
		nDigitNumbers.push(i)
	}

	let palindromes = []

	for (let i = nDigitNumbers[0]; i <= nDigitNumbers[nDigitNumbers.length - 1]; i++)
	{
		for (let j = nDigitNumbers[0]; j <= nDigitNumbers[nDigitNumbers.length - 1]; j++)
		{
			if (isPalindrome(i * j))
				palindromes.push(i * j)
		}
	}
	
	let max = 0
	for (let i = 0; i < palindromes.length; i++)
	{
		if (palindromes[i] > max)
			max = palindromes[i]
	}
	
	return max
}

console.log(largestNumericaPalindrome(3))
