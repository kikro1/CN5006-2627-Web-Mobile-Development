import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './Counter'
import EmojiCounter from './EmojeeCounter'
import WeatherMoodWidget from './WeatherMoodWidget'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter/>
    <EmojiCounter pic='Love'/>
    <EmojiCounter pic='Sad'/>
    <EmojiCounter pic='Like'/>

    {/* Week 8 portfolio – My Mood Weather Widget */}
    <WeatherMoodWidget weather="Sunny" />
    <WeatherMoodWidget weather="Rainy" />
    <WeatherMoodWidget weather="Cloudy" />
  </StrictMode>,
)
