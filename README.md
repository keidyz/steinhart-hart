# steinhart-hart

steinhart-hart allows easy coefficient and temperature calculations

## Installation

```bash
npm i steinhart-hart
```

## Usage

```python
import SteinhartHart from 'steinhart-hart';

// celsius = -25 (248.15 in Kelvin) ---- resistance = 87041
// celsius = 0 (273.15 in Kelvin) ---- resistance = 27326
// celsius = 25 (298.15 in Kelvin) ---- resistance = 10000
const steinhartHart = new SteinhartHart([87041, 27326, 10000], [248.15, 273.15, 298.15]);

const {a, b, c} = steinhartHart.getCoefficients();


const temperature = steinhartHart.getKTemperatureAtResistance(7000) // 34.7531C or 307.9031K
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
