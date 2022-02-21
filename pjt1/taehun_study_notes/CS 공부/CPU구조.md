### CPU 구조



#### 1. 컴퓨터 구조

+ Main Board 
  + CPU: Intel Amd, Arm, Mips
  + RAM : D-RAM(삼성, 하이닉스에서 만들고 있음)
  + I/O : Keyboard, 그래픽카드, 프린터, USB, 스피커, 디스크, 마이크
  + Address : 48
  + Data: 64
  + Control : Read,Write,INT,DMA,CLK
+ CPU 구조
  + 크게 3개의 구조
  + Address 버스 : CPU 에서 내보내기만한다.
  + Data 버스 : 양방향으로 주고 받을 수 있다.
  + Control: 양방향으로 주고 받을 수 있다.
  + Unit: 2's complementer, Controller, Shifter, ALU(arithmetic logic unit)
  + Register: MAR, MBR, IR, PC, AC, SP
  + Cache : L1, L2



#### 2. 산술논리장치(ALU)

+ NOT
+ AND
+ NAND
+ OR
+ NOR
+ XOR
+ XNOR



+ A 세모(Operation) B = Out

| Opcode | Mnetmonic |
| ------ | --------- |
| 00     | ADD       |
| 01     | AND       |
| 10     | OR        |
| 11     | XOR       |

![](https://i.ibb.co/5TnYSmX/ALU.jpg)

+ MUX : Multiplexer





#### 3. 가산기 (Adder)

+ Full Adder 에서는 Sum 과 Carry 가 나온다.
+ Carry 는 그다음 값에 input 값으로 들어가게 된다.

``` 
A = 2
B = 1
S = A + B

C 0 1 1 0 (올림수, 기본으로 0이 들어가고, 3개의 값을 더해 SUM 이나온다.)
A 0 0 1 1
B 0 0 0 1
S 0 1 0 0 

다음 비트로 올라가 SUM 이나오고 CARRY 발생 -> 이 과정을 반복하여 4비트 연산
```

|  A   |  B   | Cin  |  S   | Cout |
| :--: | :--: | :--: | :--: | :--: |
|  0   |  0   |  0   |  0   |  0   |
|  0   |  0   |  1   |  1   |  0   |
|  0   |  1   |  0   |  1   |  0   |
|  0   |  1   |  1   |  0   |  1   |
|  1   |  0   |  0   |  1   |  0   |
|  1   |  0   |  1   |  0   |  1   |
|  1   |  1   |  0   |  0   |  1   |
|  1   |  1   |  1   |  1   |  1   |

+ Carry 0 은 항상 0으로 들어가게 된다. 고정되있으므로 없어도 된다.



#### 4. 감산기(Subtracter)

```
A = 2
B = 5
A - B = -3       A + (-B) = -3
2의 보수기(2's complementer) 를 통해서 - 값을 넣고, operation 을 통해 출력한다.
```

| Decimal | Binary  |
| ------- | ------- |
| 7       | 0 1 1 1 |
| 6       | 0 1 1 0 |
| 5       | 0 1 0 1 |
| 4       | 0 1 0 0 |
| 3       | 0 0 1 1 |
| 2       | 0 0 1 0 |
| 1       | 0 0 0 1 |
| 0       | 0 0 0 0 |
| -1      | 1 1 1 1 |
| -2      | 1 1 1 0 |
| -3      | 1 1 0 1 |
| -4      | 1 1 0 0 |
| -5      | 1 0 1 1 |
| -6      | 1 0 1 0 |
| -7      | 1 0 0 1 |

+ 2의 보수는 이진수의 모든 자리의 숫자를 반전시킨 후 여기에 1을 더하면 된다.



#### 5. 곱셈기(Multiplier)

+ 이동기 (Shifter)
  + 0101 => 1010 : 2로 곱합
  + 0101 => 0010 : 2로 나눔

```
3 * 5 = 15

0 0 1 1 multiplicand
0 1 0 1 multiplier

0 0 1 1
0 0 0 0
1 1 0 0
0 0 0 0 이 값들을 모두 더하면 Product가 된다!

1 1 1 1 Product
```



### 6. 나눗셈기(Divide)

``` 
11 / 2 = 5
11 % 2 = 1
						0 1 0 1 quotient (몫)
divisor 0 0 1 0	 		1 0 1 1 dividend
				  0 0 1 0       이 값을 뺴보려한다. 몫을 0으로 둔다.
				        1 0 1 1
				    0 0 1 0     뺼 수 있으므로 1을 둔다.
				        0 0 1 1 
				      0 0 1 0    뺄 수 없으므로 0을 둔다.
				        0 0 1 1
				        0 0 1 0  뺄수 있으므로 1을 둔다.
				        0 0 0 1  -> 나머지
```



#### 7. 실수 연산

```c++
float a = 23.738f;
float b= -0.038f;
float c= a+b;
print("%f\n", c)
  
result
23.700001
```



#### 8. 실수 곱셈

```c
float a = 100.500f;
float b = 2.500f;
float c= a*b;
printf("%f\n",c);

```



+ 연습해볼수 있는 방법 : Logism