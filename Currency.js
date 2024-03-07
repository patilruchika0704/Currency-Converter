function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    let convertedAmount;
  
    switch(`${fromCurrency}-${toCurrency}`) {
      case 'inr-usd':
        convertedAmount = amount * 0.014; // Conversion rate from INR to USD
        break;
        case 'inr-eur':
        convertedAmount = amount * 0.011; // Conversion rate from INR to EUR
        break;
        case 'inr-gbp':
          convertedAmount = amount * 0.010; // Conversion rate from INR to GBP
          break;
          case 'inr-jpy':
          convertedAmount = amount * 1.56; // Conversion rate from INR to JPY
          break;
      case 'usd-inr':
          convertedAmount = amount * 71.42; //  Conversion rate from USD to INR
          break;
         
      case 'usd-eur':
        convertedAmount = amount * 0.88;
        break;
      case 'usd-gbp':
        convertedAmount = amount * 0.77;
        break;
      case 'usd-jpy':
        convertedAmount = amount * 112.93;
        break;
        case'eur-inr':
        convertedAmount= amount * 88.85; // Conversion rate from EUR to INR
        break;
            case 'eur-usd':
        convertedAmount = amount * 1.14;
        break;
      case 'eur-gbp':
        convertedAmount = amount * 0.88;
        break;
      case 'eur-jpy':
        convertedAmount = amount * 128.59;
        break;
        case 'gbp-inr':
        convertedAmount = amount * 99.40; // Conversion rate from GBP to INR
        break;
      case 'gbp-usd':
        convertedAmount = amount * 1.30;
        break;
      case 'gbp-eur':
        convertedAmount = amount * 1.13;
        break;
      case 'gbp-jpy':
        convertedAmount = amount * 146.14;
        break;
        case 'jpy-inr':
        convertedAmount =amount * 0.64; // Conversion rate from JPY to INR
        break;
      case 'jpy-usd':
        convertedAmount = amount * 0.009;
        break;
      case 'jpy-eur':
        convertedAmount = amount * 0.0078;
        break;
      case 'jpy-gbp':
        convertedAmount = amount * 0.0068;
        break;
      default:
        convertedAmount = 'Invalid Currency';
    }
  
    document.getElementById('result').innerHTML = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
  }