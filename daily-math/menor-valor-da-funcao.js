/**
 *  Menor valor da função:
 * 
 *      f(x) = 9 * x**2 * sen**2x + 4  
 *             -------------------------    
 *                     x * senx 
 * 
 * ===================================================================================
 * 
 *  Em 1985 o rendimento da passou a ser calculada pela Média Geométrica(M.G). Antes era Média Aritmética(M.A).
 * 
 *  M.A:
 *      x: number[];
 *      result: number = sum(x)/x.length
 * 
 *  M.G:
 *      x: number[]
 *      result: number = Math.pow(multiply(x), 1/x.length)
 * 
 *  Provando que a altura do triângulo é igual á MG:
 * 
 *      hipotenusa_principal = base-do-circulo
 * 
 *      dividir o tringulo apartir do ponto mais alto
 * 
 *          CA -> Cateto Adjacente
 * 
 *          sub_hipo_1 ** 2 = altura_sub_CO_1 ** 2 + sub_CA_1 ** 2
 * 
 *          sub_hipo_2 ** 2 = altura_sub_CO_2 ** 2 + sub_CA_2 ** 2
 * 
 *      somar as equações
 * 
 *          (x,y)**2 = 2h**2 + x**2 + y**2
 * 
 *              a soma das hipotenusas ao quadrado é igual á soma dos catetos ao quadrado
 * 
 *      produto notável
 * 
 *          x**2 + 2xy + y**2 = 2h**2 + x**2 + y**2
 * 
 *          2xy + y**2 = 2h**2 + y**2
 * 
 *          2xy = 2h**2
 * 
 *          xy = h**2
 * 
 *          Math.pow(xy, 1/2) = h
 * 
 *      Resposta
 * 
 *          h = altura = MG
 * 
 *          MG = Math.pow(multiply(number[]), 1 / number[].length)
 * 
 *          A altura de um triângulo é igual à MG(raiz quadrada da multiplicação dos produtos)
 * 
 *  Provando que o raio do triângulo é igual a MA:
 * 
 *      diametro = x + y
 * 
 *      raio = diametro / 2
 * 
 *      MA = number = sum(number[]) / number[].length
 * 
 *      o raio do triângulo é igual à MA(soma dos valores divididos pela quantidade de valores)
 * 
 *  Conclusão:
 *  
 *      A altura(MG) de um triangulo/triângulo retangulo subscrito em um semi-circulo é sempre menor ou igual ao raio(MA)
 *
 *      raio do triângulo >= altura do triângulo
 * 
 *                     MA >= MG
 */

// Exemplo:

const numberArray = [ 9, 16 ]

// Raio de um triângulo
const MA = numberArray.reduce((acc, curr) => acc + curr, 0)/numberArray.length

// Altura de um triângulo
const MG = Math.pow(numberArray.reduce((acc, curr) => acc * curr, 1), 1/numberArray.length)

console.log({MA, MG})

/**
 *  
 *  Menor valor da função:
 * 
 *      f(x) = 9 * x**2 * sen**2x + 4  
 *             -------------------------    
 *                     x * senx 
 * 
 * ======================================================================================
 * 
 *                                             (X)            |          (Y)
 *  
 *      9 * x**2 * sen**2x + 4         9 * x**2 * sen**2x                4
 *      -------------------------  =  ----------------------  +  ------------------
 *              x * senx                     x * senx                 x * senx
 * 
 * 
 * 
 *      X + Y         
 *   ----------  >=  RAIZ-QUADRADA(X * Y)
 *        2       
 * 
 *      X + Y         
 *   ----------  >=  RAIZ-QUADRADA(9 * 4)
 *        2      
 * 
 *      X + Y         
 *   ----------  >=  RAIZ-QUADRADA(36)
 *        2    
 * 
 *      X + Y         
 *   ----------  >=  6
 *        2 
 * 
 *                      
 *   X + Y       >=  6 * 2
 * 
 *   X + Y       >=  12
 * 
 *   f(x)        >=  12
 * 
 *   MA          >= MG
 */