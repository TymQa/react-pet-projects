import './index.scss' // Импорт CSS для стилей компонента.
import React from 'react' // Импорт React для использования его функциональности.

function App() {
	// Хук useState создает переменную состояния "count" с начальным значением 0
	// и функцию "setCount" для обновления этой переменной.
	const [count, setCount] = React.useState(0)

	// Функция-обработчик для увеличения значения count на 1.
	const onClickPlus = () => {
		setCount(count + 1) // setCount обновляет состояние, увеличивая count на 1.
	}

	// Функция-обработчик для уменьшения значения count на 1.
	const onClickMinus = () => {
		setCount(count - 1) // setCount обновляет состояние, уменьшая count на 1.
	}

	return (
		<div className='App'>
			{' '}
			{/* Основной контейнер компонента с CSS-классом "App". */}
			<div>
				<h2>Счетчик:</h2> {/* Заголовок счетчика. */}
				<h1>{count}</h1>{' '}
				{/* Текущее значение счетчика, отображаемое на экране. */}
				<button onClick={onClickMinus} className='minus'>
					- Минус {/* Кнопка уменьшения значения счетчика. */}
				</button>
				<button onClick={onClickPlus} className='plus'>
					Плюс + {/* Кнопка увеличения значения счетчика. */}
				</button>
			</div>
		</div>
	)
}

export default App
