export const progressCalculater = (currentIndex, totalLength) => {
	//totalLength = totalLength - 1;
	console.log(totalLength);
	return (currentIndex / totalLength) * 100;
};
