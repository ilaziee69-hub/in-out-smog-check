import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=144+S+Bradford+Ave,+Placentia,+CA+92870";
const bradfordHouse = "https://commons.wikimedia.org/wiki/Special:Redirect/file/A.%20S.%20Bradford%20House.JPG";
const citrusGrove = "https://commons.wikimedia.org/wiki/Special:Redirect/file/Citrus%20groves%2C%20Golden%20Ave.%2C%20Placentia%2C%20June%201961.jpg";
const waterTower = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAHOAQQDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA+EAACAgECBAQDBAkDBAIDAAAAAQIRAwQhEjFBUQUTYXEigZEUMkJSFSMzYnKhscHhBkPRFoKS8TREJVPw/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQACAwEAAQUBAQAAAAAAAAECEQMSITFBBBMiMlEzQv/aAAwDAQACEQMRAD8A+IodFUOjqyih0VQUBNBRVBQCAqtxUEKgHQ6AkCqCgJoCkgoCaCigoCaCh0FAIVFUBRNBRQiKVCKoKAmhUXQUBFBRVBQEUFFUFARQUVQUBAFUAG1DodDoImgoqgoCaBIugoCArcugoCaCigoCaCiqCgJoCqCgJoKKoAJrsFFBQEUFF0FARQUVQUBNCouhUBNCouhUBNBRVABNCosVATQqLoVAQBdAFa0FFVe65ASXaEBVBRRI6HQUBNBRVAAqChhRQqCiqCgJoCqCgJoKKoKAmhUXQUBFBRVBQE0FFUFARQUXQqAmgoqhUBNBRVBRBNCoqgoCaFRdCoCfkBVABrCMdqtX3CqLUozUVNuOVdt0J/M4cOX4WpoKHQ6PQiQKoKAQUVQUBNBRVBQE0OiqCgJoKKoKAmgoqgoCaFRdBQEUFFUFARQUXQqAkKKoKAmgodBQE0FFCAVCaKACK2CigoggCqADV4VDI66dOZrmXxp9Gk0ZaPLw5Wp02nu2zbJLi2quHY83DP5OmUZUFFUFHqc00OiqCgJoKKodARQ6KodARQUXQUETQUVQ6AigougoCKFRpQqAigouhUBNCougoCKFRpQqAigouhUBFCougoKgVF0FARQqLoVASBVAAPBOMlKPNt7dzeS+JjUuKMVyrkwOPHhZ7W8rtNDoodHZhFDoqgoImh0VQUBNBRdBQE0FFUMCKCi6ACKCi6ACKCiwAigaLFQE0Ki6CgIoKLoVARQuE0oVAZ0KjShUBFCo0oTQGdBRdCoKjhAugINaHQobwT7otICaHRVBQE0MdAVCGAwEFDABBQwAQDCgEBVCAVAVQUBNAMKAQigoCaAqhAIVF0ICaFRdCogmhNF0KgIaFRpQmgM6AugAeLaFdnRoTFVKa/esuiT41fpAOgoqEBVAkUKgoqgoImh0OgoBUFDodATQFUFAKgHQUBIFUFATQUVQUBNCougoCKCiqCgJoVF0ICQoqhASBQUQTQqKCgJoBgA/933iv5FET2yY37o0JGqAoBlQhjoKKEFDodBCoKHQ6AkdDoaQE0FFUFFE0FF0FATQqLoKAirCi6CgIoKKoKAmhUXQqAmhNF0JogmhUXQUBFCouhUBFAU0FEEUBVABOVVwPtNGtGeoX6q+zTNaJPrVKh0OhlQqCh0OihUFFJBQCoKKoKCFQUVQUAqCiqCgJoKKodFE0FFUFARQUXQUBFCougoCKFRpQqAigougoCKFRdBRBnQUXQNAZ0KjShNBWdAXQERGdXgyL90uG8IvukOceLHJd0xYN8GP+FE/LX4VQ0iqHRUTQUXQUBNBRdBQE0FFUOgiUh0VQ6Aih0VQ6AigougoCKHRdBRRFCo0oKAzoKNKFRBFCo0oKAzoKLoKAzoKLoKAzoTRpQqKM6Ci6CiKzoC6ABcJGl+LBB/I3UTDQRawU+kmY/K/hsolKJaQ+EuzTPhCjThDhGzTOgotoRUKgoYAAAMqAB0OgJGOgoBDHQAKh0MAFQqLCgIoKNKFQGdBRpQqCs6CjShUBnQmjShNAZ0DRpQmgMqA0oAgiYaJ2sq6LIzdGOjX6zUR7ZDnfrc+OpRs0ULHjW51QxpmblpqRzrHfQl46PQjh9CZ4asxM16vNcSGjtnjMJROsyYsc4FNCNMhFUCRSiUJIdFqJfAEY0FGrgJxAzodFUFFVNDodDSAmh0OgoBUMdDoCaCiqHQEUJo0oVEGdC4TWhcIGdCo0oOEDKgL4QAiEV6k6bFHz9QuL8V8gTMNNNvW6ldmjnW49XHhXSSOzFhaaqUfqebjnR048nqcspWpXt6bEp/DNQT6NSQ9VoZQfNO/U8/DqGjpnq+LHwy+JV1ObTky6ad8l9UcuTBLqjbJLd8NbnLOb7nTDbOTKeFmThRq8ku7+pNyfVnaOaYxNoxFFM2xrc0gjjs1WHY6MOPi6HpY/D45NJ5j47uqtJcyW6J68KWNmbge9r/D4aeCcfMduviqjysmOhKljjcRUdDgQ4mhlQUacIcI2rOh0XwhwgRQ6L4QoghIey5vmVSStukcuszVGcYyUXBKcZepnLPrNmnTwhR4sNfmhk4uJuuaZ6+m1OPUxbi6a5pkxzmRpdC4Ryy4YOpZccX6ySMZa/RQ56rD/wCRvZqteEXCcsvGPD4//YT9ov8A4MZ+P6CPJ5Ze0Cdo11v+PQ4QPJf+pNJf7HM/p/yA7w6Zf460cumf/wCR1UfRM60cenr9KarvSM1Y70zSMjJFIUdEclF+a9tzl44rnKK92J6nCueWH/kY1F9dDyPjr0Ibs5Za3Txm28qrh6JmT8U0qk05Sv2LNQ1a7Gykzzn4rp7+GOSXyJfi+NPbFL5yNdodK9eM0uiOjHkj1ieB+l30xRXuzXH4pOXKMEO8T9uvpsGXGvwfzPXxa7GsKxxx8u8j47Dr5yff2R3YtXka+5P6F7RnrY+h1erhnx8Mse63Ts8rLKF/c/mc0tRlkvuT+ZyZ/OyL7qXvJE7yL0tdU541zaXu0YS1GnjzzQXzPOyaHNP8UF8zH9E5HzzxXsmZvLG5xPRn4ho4886+SZhPxfRR5SnL2ieRj0jyayWB5Pu3ul2dHavBsP4suR/QzeVuccaT8d0y+7jyS+iMJf6ggr4dO/nP/Br+h9IufmP/ALi14Vol/tN+8mZvLWpxYuGX+ocv4dPjXu2zKf8AqDV/hhiXy/yetHw7RLlpsfz3NFpNND7unxL/ALET92r+3j/j5jP4nqszbnk+S2Ri9VqJRrzJcPufYrFjX3ccF7RQs+JZME4Uvji48vQz2XrHxkZZsrqDnN9o2zWOi1sntp8zv91nreA6LNheSWbFPHyriVWe9FU0S5LI+Qj4Pr5f/Xa92kWvAdc+cYL3mfXLm2QOyvl4/wCndU+eTCvm2ar/AE1k/FqYL2iz6KgqydqPn/8ApuK56p36Q/yB7zW4F7UYUcGlr9La26SSW7Zvq9fg0tptzn+WP9z5zVaiebNlyfd8x7pcj02vLI9jW+MYsSa0/wCsl+Z8l/yeNPV5pzc55G5Pqzmad7k783yM27bk06PtE2/vMPPne0pfU5nITb6WZVtLI292KeSnB9KMbdblZLeGD90VHuaGWlyRTeNNvvJnpRxaXhbjgg2l2s+R0+olhna5Pmj3dLq1OMWnz5Mxli1Mmn27Jhkn9ix8HWoNUdrzPU6eUFh4Lja2rfmLHnvmdEZJ86M7039VoVLFp4QltLqrOuOV1zOSeaGJq09+wlrMdOoyJumo7HlfcTmzkerhy4ZCerXSD+o9PHXxEzcuF8NcVbX3OP7Y0/uL6lR1c5TSUYpXvzJqruMIY80NWs0Mf6zJ+0uNJe256K4vxCyPghKX5U2eXh1+pnBSycCb3SUR7T49boD5HlvW6hv7yS/hRL1eof8AuNeyQ6029YZ4z1Gd7+dP5MX2jM+ebJ/5Dqdnt7jaPBeab55J7fvMvw1zXiUW8k5QlFqm7oXE7PbfMPMinvKKru0TmdYMyrnCX9D5fTYYrGnJKUmrtiTZbp9VPPhjBt5sav8AfRg9Xpo89RiT/jR4s1FRpRXLsZypcki9Wez3JeIaOPPUY/k7Mn4ppfw5fpFv+x4zd/QResOz1n4npnvxzf8A2S/4A8hSpAXrE7Vl9nbdcVsj7M26s+q/QsW21k63vD/JxYvDnm1eXHGai4rm1zp0bY3XgPTxT3mhw0PmyqMrfqfT4/A8mOTcMmJ3z4o3fp7DXhSw6hRx1Fzi5NW2lTXJk7RfXzD8Mle7S+ZL8OcauVX23PrM/g+oiot8Kcla4lzOHN4ZmhKKk4XK2q9CbHz8/DnCdNptVyNP0S3j+KbjK+VH0UcD8yUnU5cS+LvsugpabgnJJ0uqe/Pf+5nu3MfXz36Ff/7P5HTpvDXgTvI38j1Iaaay/E7p9zWWL16roTtVuMckIKCabg5LZuUmt/Y6IKnFpx3v7rtbUdH2dOVrM4q+SoieJLJjSyOWz/sNpHLq5LzMfsQnsXrIJZYbv7v9zNbFhVXuFkN/EF2UNvdl4n+sj7mb5mmL9pH3IPRzpvDk/gf9DxsbfBDvR7WW/Lyfwv8AoeJBfBH2JiuRtktjZMmaYOxIAsA6nRoP/n4vn/Q5lzOjROtdh9X/AGFI9vJHixTXeLX8j5vTbaeF8+FH0z5Nd0fMYHeGNdEZxarXoZTNLM8nJGmUiFYWVEy5gFWBR+laDwrFmTlNz4VVrzJLoeTpdPilrtS2pKHC3GsnC1v1fU6MPjyxYZwhGK4vxXbR5WTPFXJ09j0THy7crfXoz0zTuOeS2v8Abp7HPGMlrZQ8zJKUYNcTae9o8bLrMeOSqD+Hludvh3iXHkefJvKV8l6o4ZY6dJdva8X1XFqIRjfwQ4XVc76nnLC8+THxOTvHOUVXJ+vY5tZqJz1ksji6cVJPsZrV5Y1JTcOF8LSfNOuZyy21HVPSN6jNjuUo45cLSjy5bnn+IauOi3jWVyd3ulyo6JTnl1eWPGlGLttPm6PJ1+ny6uUOCF7btIkn+tW+eODL41qm/hyKKXaKL0vjeZ5VDK1NNqm1ujztTpMmPVrBTc+FSpLkdOk8J1ORLJFUk9+J0bvWT1j+T3MOaGRbPCm9+UjqxcXmQlcHBqVcKa7HkYMqxRlGWSaklX3lzT6Ho6XLxZFcpv4XtJ3XIlaxpaz9rG/y/wBzE01zrPH+FGHEItEvvD6mbfxFcRUN/eLxupxMr3Kg6nHqRXsZf2c/4X/Q8OL+GJ7eV/BP+F/0PBi/givQmJlVvmS96BsTeyNMGC5CsL+EoDbTOtXhf76MUzTB/wDKwfxx/qSq+hTb5qj5jT/s67Nr+Z9T/Q+VxbPIu05L+bM4rWpGT7pVkZZLgNMsrAm/UOI0Ki9gMnIAOz7fa5pex2aFPX5VhWWONtbXbs8mUMH2h5FkhCN2satpeh0x10cc+LHPHCXeOPdG8s7rxiR6D8GnPjjPUpZlJR8uMG7vs2edHi8+WLFkUIq64/58jfNrpLJHKtVmeRLZql6HAsqjlU1KTlT5pVv/AOznLlfrXj08OT4056jHNuLqMVK5fXYn7XCONTUcscTe7auzyYZsmLKskJtyjy4nZKz6jgUfPaiuSXIaXb6D7V5Opy5YY3Lilw3XSzkzaif2rElKeOGSe0eJrbiPMx6vVYY1DUZEudcWxGXVZ8k8c8uRzlCVpt7merUyn5XrsssGsnkhOSybri4t6FpfHsmHH5co8btvikzLLn83zHOEZSnyf5Ti8iPWTNTGWayS5a+OnUajz7nHaTlexth1GeK2zSXszijjUXanI6oahxX3Yv1ZbNeRJk9eGWeTFGWWblLlbLvZHjvWZXVcKS6UP7fmS/D9CaXs9WT+IOLY8r7dmu3w/QPt2XtAaTb1XLcvG3LIldXtZ5P2+f5UOPiMozjLgTp3zGjbp8Ry6vw/I61WSTltUnaFjzNxje+x53iGryazJxKPDG7puxQ1UopJw5epdeJt7F7fMG+R5y8Qpb45FfpCH5Z/Qmqbd6ew/wALOFeIYq34voUtfgrnL5xY1TbqT/qDzPA1kS4uBp0cq1uF/j/kycuqxTxuMZpt8hpdvX/6gd76f6T/AMHDhyeZ5k6rinJ12tnIor4rq+lMrDljjjKEmk1J9SaatdtmeZry2+qIjnhL8a+oZZxeGXxL6hlgphxGKyLug41b3N6Ro3vsBEZJrdgEc3nDWb1MUNG0b+c2kuwLK7/yYU+46fdE0N/MbFxsyp/mD5saGjkDmZ36BbXb6E0KbsXyL8vLw8Ti1GrboSg31C3whp+4+B9w4WEK32C2PhdCpgLcAAAHQW+wfIBNCq+5V+gcXZAKg4Rp9x8SAnhBxK4og5LsBDiKi3JNdSbQE0Jr1LbXYXyAikyXFdEaCKMZQa70Tv3aOgiUE/Rl2jJSkvxP6gNxaYFHow07k90qNo6bF1ipfM1hBLqbwut5V7HPbUjlWjhLaOBv1TY34ekt8M0+j4/8HdGN/wC618yli4n+0VeqM7q6eS9Bkv4eJr2IehyLm39D2ZYYx34k/ZmUoOMdote7L2pp5H2aa6ovBp280FJpriVne5OuaK08HLPDZJXzexLl41hjvKFnhKWPPK2mvhr5Hl8M1+FnsZc0IrNC/ilJtJHFfoTjvjrz6tcdz9SWpPudrfohVfQ6bedx8MgpnZRLhF8xtHLv3A6XigyfJXS2NjEOL0s18t9mNY5eiAx4vRBZssLf4kUsH7wHPYWdK08fVjWGK/ANjlEdvAl+BfQaddEhscShJ8ot/IuODI/wM7FIfEibVyrS5H+FL5mi0E3znFHQp+n0HxLuwMF4euuT6IteH4lzlJ/M14/UOL2sBLRYI/7V+7LWnwL/AGI/QnzXFb/1IlqYrnJfIDby8K5YofRAc32uHZv5ABSl7mkZPshfA+pax2rirrYjQ4n0G5SfNon4VbviS/IrdlqNOHDFbbyb3v6ogSUmm05NL8qD4Ix4nLij2T3b7GscTnPijjyzk9moql8qNFhyxW2BY13kiK5uLZcEFztt7P5f+jp00fMlPUZZScsdKC4m0vqZThv95X6I79DpM2bQ5Xijx3OuddDOfx14dd5t5OfFU25NPidvYnh+FxatXa3O7UaDUxUnPGoJfmkjl+HqrHH8a57NzTN4097SXX0I8uTut67G9x/KJyv0OjzsfLXVP6jUYr8Jtxrhaq76dhSjFRbUl9eY2jOu23yGl+8EotW7UkuqfIlyqv6AXwr8oOvV+wtg4orqAcKb5Mflx7kcfZMOJtcpANxiuTYnS/FQufNSYU+38gIlOK62T5i/K2aODYvJk/whNI8391C830L8h9h+R8iiPNX5Q8x9I/zL+z7j8qK7sgz8zI+VIhym+cmbOC6ITx+hRg0Lh9DZxHCLb+GNgYU+wHetMq35+4FRHmPy1FKMXd8SW69LG5OWRzcnxVV30HwSfSh+V3MtiLr7tK/Q0jOS5GahBP7xSmk9mQdeHV6nGmoNpPtsX9pn+KCb6vis4Xml0aYvOl/6RNG3bPK3/tpetn0Hgivw2Da+/N2vTkfJcc3zVL1PWjpdX+jsE8cJyTjacN+voYz8jrxYzK+16fisli02dLZONferr2SPl2+yNs2DVbTyxyKF03N/8k0nzlsXD4nJj1utsfifoKmb8MK52HwrlE25sfr9BcN/5NJTvpRHwvuUKU3w1LJst+Qlmjk58Tle7e5nk7cxqHCgjRpPfZJuqTuhcEbdb12I4ZWP4nHhbtLeqApKN/iNFFf/AMyHK1Jv776vcd3bW1K6Xf0IrVKlzHs+pzPLBOnJJPuylLiVp2vQDfZBa9jBX7/Mq/QDR11JVC411Fxx9QLsTXoLiREpOyhtLsZyT7MfG+xcY1u+YROPE07mr9DdP0IcnfQd2t0aZaWvysDHif4VNrumBRm8jfoJyXXcxTlLoUoyfUw00tdENJsmMWupom0RTUO7KUfUXEFoBtbH3Gn4fs+GON/DHGlz5Hw3EevqfEM+OS8lzwR4VUYytcvU553Wnfi47nvTXxuS+zKK5ufp/wCzwWpGuXU5M02sk5T6/E+RHPoax+McmPXLTN8Xcm59y3GupLi7NOZebKqe4paiSQ67owybukVGmOanK3KjZOL6mEYVSZoorqmBbuxqLfJ0S49nIlqaezINuFLm7FwruY3MTk+qYVWfgjDkrb7GePKlHg5RuyMz2Vv6mV9mjTNr0W0+K6falQtvhS4rfp1ObDNuG7WzNHMzpdr4W7apq658xO1zTRLmqqlTBZJxknw2kqpf5KH8wpt0mCcZRbq3fLdF1FOo3urVq/6AOK4eb3G9+RMVceJU16BardqkVFU7Jdyveo9WcuTUcTqHJc3fMTzS4aCNZ6hRdK6XYDl4vQBtXYNMlsCKuyluZplEVpVBe3QjdhwkFVbS7s79c/1j+hx6aCeoxx7yR06x3OW/U48n2Pf+ln8bXEt5sq6IT+Jj6HXH48vN/ehyXRBxCr1HRpyKcqj6meNJv2CXxM1hDhjuwKUUuo9hUiZbAU3uTz6CTXcoBpCcXWysfFXQTkwObPHdWYOCOrUNcK36nPxGozTxRV0+vI1eOV7GMm06OjFPjj6oCOGXYcVJ89kbP1FfYiiD4TRzuqZnVktUBq6a3t1/I5nNuVwlJJPmnzJlk4vhX3evqLaS50yoclCU74XG+2yF5fFBtfC10buxOO3MluucSAjinJWpQXzASyNcrQAdVeoIErKUSKExrcK+Y1HuyKEULkDYG+k31eP0t/yK1L+Jk6JP7RfaLFqHcjhn/Z9H9P8A82EepRGNc/cto7T48XJ7nSsU5KMa6srh23MXu7K5qxq3vyNasmEeGPqVb5AFA0uoWibAGl2BJrqAJrqApfDuYyyy6Ugy5OKTp7IxlI1GbRJtvd2SwspJlE7ye5pjl5bsFQPcI6HJJW2twU490ZRjGUEpK6LjjjBbe4U3Kk+pzTyueydR6tdR5ZubcFy/E/7EqCAalGgb32HwIl7MB8QnKxcxWA3uAAB2Doy82K52vdFKafJpmWlqhkpjRBW7KSS5k2MK6dI/jm+0TDO/iZrpdo5GuyOfK+Zwy/s+jw+ccGL7iK2siC+CJbaSs7Pn5fU5JUqXUzim37BJ27ZpBVHtZWTXzYNldOQnECOL0C0l6iapgA7IyyqHuU+Zz5Hcq6IsRm/QFG2XFXtRSgaRKxlKKiVyJd7AFIljbpkN1bYGsLUW00RlzNvgi/d9iJZXShDn1fYIQ2AIJLpsaKg+FLkHQgNrsTa6i4X3FwqwHt2FQ69Qey6lEvmAnvzADo9KTDgi+m/psC2KTMqSjJfdl8nuVc1zjxew0xkVKyR/FcX6lxaktpWg6kOEN9lfoB2afbDkb7o5Mz2ZvhXDppbveXU5srOP/p9HDzjjWH3V7Cm3ysjzVGNzi4kRyRnykm/c7Pn1pCNy70apbiiqiX1AVA13Gga6gRV9Bbdi/kTQRE/uujFI6q25GBYhJJANrbmS2VD5ESkmgk9jOU6RQSaS5nPknxOlz/oGSbe0eZCjSLEdGOKS2+rNUuFDxq0ttqKrcyqbpcgvryHsJ1z5sKZPCyqXNj5MCa+pEnSLb9UZSe+5UK/QB2AG6ZSMFJ2WpkVsh2ZcYKTsitbDYlMaIOiO2mXuzjyO2jqe2nicU27Xucsfr326wjebt8PYlY4zaTinRPEzWC2vqzs8B+X1hJpr1K/WJ84y99h8qBc2QHm0vii17bgskXsmNW3QnXVJ/ICqYJNU3zMljVbOS9mCc43TXu1uBeVuMPVswbFlzviUZL6ExkpPqWI0n8ONMyu/Y1zK0uxzS7dCoba6GOWd7Ln/AEHOVRv5IiqbXXqyhRikqXz9S1FDSpFAdOOlBewr3dcxQf6tFPZEVO9Cp2VzACX3BP0obV8iOwCa7UJ2tim6MnOnyAHJp8gJu9wKj//Z";

export default function Placentia() {
  return (
    <>
      <Seo
        title="Placentia Smog Check | STAR Test-Only | In & Out Smog"
        description="Fast STAR-certified Test-Only smog checks in Placentia. Walk-ins welcome, upfront pricing, no repair upsells, and one free retest within 30 days."
        path="/placentia-smog-check"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "In & Out Smog Check — Placentia",
          telephone: "+1-714-993-1660",
          areaServed: "Placentia, CA",
          address: {
            "@type": "PostalAddress",
            streetAddress: "144 S Bradford Ave",
            addressLocality: "Placentia",
            addressRegion: "CA",
            postalCode: "92870",
            addressCountry: "US",
          },
          sameAs: ["https://www.google.com/maps/search/?api=1&query=In+%26+Out+Smog+Check%2C+144+S+Bradford+Ave%2C+Placentia%2C+CA+92870"],
        }}
      />

      <main className="placentia-page">
        <section className="pl-hero">
          <div className="pl-hero-copy">
            <p className="pl-kicker">STAR CERTIFIED · TEST-ONLY STATION</p>
            <p className="pl-local">YOUR LOCAL SMOG STATION IN PLACENTIA</p>
            <h1>Placentia Smog Check.<br /><span>In. Out. Done.</span></h1>
            <p className="pl-lead">Fast, honest smog checks right here on S Bradford Ave. We don’t sell repairs, so there’s no incentive to fail your car — just straightforward testing from a local shop serving Placentia since 1999.</p>
            <div className="pl-actions">
              <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
              <a className="pl-btn pl-btn-outline" href="tel:+17149931660">Call (714) 993-1660</a>
            </div>
            <p className="pl-hours">Walk-ins welcome · Mon–Fri 8AM–5PM · Sat 8AM–3PM</p>
          </div>
          <figure className="pl-shop-photo">
            <img src="/photos/storefront-approved-final.jpg" alt="In & Out Smog Check storefront on S Bradford Ave in Placentia" />
            <figcaption>144 S BRADFORD AVE · PLACENTIA</figcaption>
          </figure>
        </section>

        <section className="pl-proof" aria-label="Smog station highlights">
          <div><strong>~10</strong><span>MINUTE<br />SMOG CHECKS</span></div>
          <div><strong>★</strong><span>STAR<br />CERTIFIED</span></div>
          <div><strong>25+</strong><span>YEARS SERVING<br />LOCAL DRIVERS</span></div>
          <div><strong>0</strong><span>REPAIR<br />UPSELLS</span></div>
        </section>

        <section className="pl-service-split pl-local-split">
          <figure>
            <img src="/photos/inspection-bay.jpg" alt="Vehicle inspection bay at In & Out Smog Check in Placentia" />
            <figcaption>WHERE PLACENTIA RESIDENTS HAVE BEEN GETTING THEIR SMOG DONE FOR OVER 25 YEARS</figcaption>
          </figure>
          <div>
            <p className="pl-label">RIGHT HERE IN PLACENTIA</p>
            <h2>Easy to find on Bradford Ave.</h2>
            <p>Our shop is at 144 S Bradford Ave, close to Chapman Ave and just a few minutes south of Valencia High School. If you know Valencia High or the Placentia water tower, you already know the neighborhood.</p>
            <div className="pl-local-points">
              <span><b>VALENCIA HS</b> Just minutes north on Bradford Ave</span>
              <span><b>WATER TOWER</b> About a block from our shop</span>
              <span><b>SINCE 1999</b> Serving local drivers for 25+ years</span>
            </div>
          </div>
        </section>

        <section className="pl-water-tower">
          <div className="pl-water-copy">
            <p className="pl-label">A PLACENTIA LANDMARK</p>
            <h2>See the water tower? We’re right nearby.</h2>
            <p>The Placentia water tower is one of the easiest local landmarks to recognize. In &amp; Out Smog Check is about a block away at <strong>144 S Bradford Ave</strong>.</p>
            <p>Coming from Valencia High School? Head south on Bradford Ave and you’ll be at the shop in just a few minutes.</p>
            <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
          </div>
          <figure>
            <img src={waterTower} alt="Placentia water tower near In & Out Smog Check on Bradford Avenue" />
            <figcaption>PLACENTIA WATER TOWER · ABOUT A BLOCK FROM OUR SHOP</figcaption>
          </figure>
        </section>

        <section className="pl-services">
          <p className="pl-label">WHAT WE TEST</p>
          <h2>Smog Check Services for Placentia Drivers</h2>
          <div className="pl-service-grid">
            <article><span>01</span><h3>Registration Renewal</h3><p>The standard smog inspection required for many California registration renewals.</p></article>
            <article><span>02</span><h3>Change of Ownership</h3><p>Buying or selling a vehicle? Get the required transfer smog handled locally.</p></article>
            <article><span>03</span><h3>Out-of-State Vehicles</h3><p>New to California? Bring your vehicle in for its California emissions inspection.</p></article>
            <article><span>04</span><h3>Gas, Hybrid & Diesel</h3><p>We inspect eligible 1976+ gasoline, hybrid and alternative-fuel vehicles, plus eligible 1998+ diesel vehicles up to 14,000 lbs GVWR.</p></article>
          </div>
          <p className="pl-star-link">Need a DMV-required STAR inspection? <Link to="/star-certified-smog">Learn about our STAR-certified smog checks →</Link></p>
        </section>

        <section className="pl-local-history">
          <div className="pl-history-copy">
            <p className="pl-label">PROUDLY PLACENTIA</p>
            <h2>Local roots. Local service.</h2>
            <p>Placentia has grown from its early citrus and railroad roots into the community we serve today. In &amp; Out Smog Check has been part of that local story since 1999.</p>
            <a className="pl-btn pl-btn-black" href={directionsUrl} target="_blank" rel="noopener noreferrer">Drive to the Smog Station →</a>
          </div>
          <div className="pl-history-images">
            <figure><img src={bradfordHouse} alt="Historic A. S. Bradford House in Placentia" loading="lazy" /><figcaption>A. S. BRADFORD HOUSE · PLACENTIA</figcaption></figure>
            <figure><img src={citrusGrove} alt="Historic citrus groves in Placentia" loading="lazy" /><figcaption>PLACENTIA CITRUS GROVES · 1961</figcaption></figure>
          </div>
        </section>

        <section className="pl-find">
          <div>
            <p className="pl-label">EASY TO FIND</p>
            <h2>144 S Bradford Ave</h2>
            <p>Look for In & Out Smog Check between E Chapman Ave and E Crowther Ave. From Valencia High School, head south on Bradford Ave. The Placentia water tower is about a block from the shop.</p>
          </div>
          <div className="pl-find-actions">
            <a className="pl-btn pl-btn-red" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
            <a className="pl-btn pl-btn-outline-dark" href="tel:+17149931660">Call Us</a>
          </div>
        </section>

        <section className="pl-seo">
          <h2>Placentia’s Local Smog Check Station</h2>
          <p>In & Out Smog Check provides STAR-certified Test-Only smog inspections for Placentia residents, including registration renewal, change-of-ownership, out-of-state registration, eligible diesel vehicles, hybrids and plug-in hybrids.</p>
          <p>We’re located at <strong>144 S Bradford Ave, Placentia, CA 92870</strong>. Open <strong>Monday–Friday 8AM–5PM</strong> and <strong>Saturday 8AM–3PM</strong>. No appointment needed. We also serve drivers from <Link to="/yorba-linda-smog-check">Yorba Linda</Link> and <Link to="/fullerton-smog-check">Fullerton</Link>.</p>
        </section>
      </main>
    </>
  );
}
