export const progressCalculater = (currentIndex, totalLength) => {
	//totalLength = totalLength - 1;
	// console.log(totalLength);

	return Number(Number(currentIndex + 1) / Number(totalLength)) * 100;
};
