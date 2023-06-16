		// Задача 3. Створити генератор, який би випадковим чином поступово 
		// генерував вказану кількість парних чисел.


		function getRandomNum(minV, maxV) {
			return minV + Math.floor(Math.random()*(maxV-minV+1))
		}
		function* generateEvenNum(evenNumAmount){
			let evenNumCount = 0
			while (evenNumCount<evenNumAmount) {
				const randomNum = getRandomNum(1, 100)
				if (randomNum%2 === 0) {
					yield randomNum
					evenNumCount++
				}
			}
		}
	
		for (const item of generateEvenNum(20)) {
			console.log(item);
		}