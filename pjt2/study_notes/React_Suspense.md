## React Suspense κ³΅λΆ

<hr>

<br>

## π React Suspense

1. ### CSR : Data fetching via compatible libraries (ex. Relay)

   - ex.

     ```jsx
     // λ°μ΄ν°λ₯Ό fetch(κ°μ Έμ€λ) μ»΄ν¬λνΈ
     function Profile() {
         const [profile, setProfile] = useState();
     
         useEffect(() => {
             fetch("/api/profile")
                 .then((response) => response.json())
                 .then(setProfile);
         }, []);
     
         if (!profile) {
             return <Loader />;
         }
     
         return <div>Hello { profile.name }! Welcome!</div>;
     }
     ```

     react query λλ SWR κ³Ό κ°μ λΌμ΄λΈλ¬λ¦¬λ‘ μμ μ½λ κ°μ  κ°λ₯ β

     ```jsx
     function Profile() {
         const { data: profile, isLoading } = useQuery("profile", fn);
         if (isLoading) {
             return <Loader />;
         }
         return <div>Hello { profile.name }! Welcome!</div>;
     }
     ```

     νμ§λ§, React Suspense νμ©μΌλ‘ μλμ κ°μ΄ λμ± κΉλνκ² μμ± κ°λ₯!

     ```jsx
     // profile.js
     function Profile() {
         const { data: profile } = useQuery("profile", fn);
         return <div>Hello { profile.name }! Welcome!</div>;
     }
     
     // App.js
     <Suspense fallback={<Loader />}>
         <Profile />
     </Suspense>
     
     // loading state(<Loader>)λ₯Ό μμ μ»΄ν¬λνΈ λ°μμ κ΄λ¦¬νκΈ° λλ¬Έμ μ½λκ° ν¨μ¬ μ§κ΄μ !
     ```

     - λ¦¬μ‘νΈ18μ fetching library μμ μλμΌλ‘

       μ»΄ν¬λνΈμ data fetching μ΄ μλ£ λκΈ° μ κΉμ§λ

       `Suspense` μμ μ μν `Loader` μ»΄ν¬λνΈλ₯Ό μ¬μ©μμκ² λ³΄μ¬μ€!

       data fetching μλ£λλ©΄ ν΄λΉ μ»΄ν¬λνΈλ‘ μλ μ ν!

       <br>

2. ### SSR : Streaming server rendering (not only μμ κΈ°λ₯μ SSR μΌλ‘λ κ΅¬ν κ°λ₯.. but better!)

   - SSR μ λ¬Έμ μ !

     - μλμ κ°μ κ²½μ°,

       μ μ λ `Nono` μ»΄ν¬λνΈμ λ λλ§μ΄ λλκΈ° μ μλ `Yesyes` μ»΄ν¬λνΈλ₯Ό λͺ»λ΄.

       ```jsx
       <App>
           <Yesyes />
           <Nono />
       </App>
       // Nonoλ λ§€μ°λ§€μ° heavyν΄μ λ λλ§μ΄ 10λΆ κ±Έλ¦¬λ μ»΄ν¬λνΈλΌλ κ°μ .
       // κ³ λ‘, μ μ λ CSR μ κ°μ΄ λΉ νλ©΄λ§ λ³΄κ²λκ² μ§..
       ```

   - ## `Suspense` λ‘ μμ κ°μ λ¬Έμ  ν΄κ²°

     ```
       ```jsx
       <App> 
       		<Yesyes /> 
       		<Suspense fallback={<Loader />}> 
       				<Nono /> 
       		</Suspense>
       </App>
       // Nono μ»΄ν¬λνΈλ λ‘λ©μ°½ λ³΄μ¬μ£Όκ³ , λ λ μλ£λ Yesyes μ»΄ν¬λνΈλ λ°λ‘ λ³΄μ¬μ€!
       // μ΄λ¬ν λΆλΆμ  λ λλ§μ λΆλΆμ  hydration λ λ¬Όλ‘  ν¬ν¨λ¨!
       ```
     ```

     - μΆκ°λ‘,

       μμ `Nono` μ»΄ν¬λνΈκ° μλ²μ¬μ΄λμμ λ λλ§μ΄ λλλ©΄,

       HTTP stream μ μ¬μ©ν΄μ

       **λΈλΌμ°μ μμ λ¦¬μ‘νΈ λ‘λ©μ΄ λλκΈ°λ μ μ**!

       λ¦¬μ‘νΈλ `Loader` μ»΄ν¬λνΈμ HTML μ μλμΌλ‘ `Nono` μ»΄ν¬λνΈμ HTMLλ‘ λμ²΄ν΄μ€!!

     - μ¬μ§μ΄,

       μμ§ hydarate λμ§ μμ λ¦¬μ‘νΈ μ»΄ν¬λνΈλ₯Ό μ μ κ° ν΄λ¦­(μΈν°λ νΈ)νλ©΄,

       ν΄λΉ μ»΄ν¬λνΈμ hydrationμ μ°μ μν¨!!

<br>

## μ£Όμ!

- `Next.js` κ²½μ°μ SSGμμλ Suspense μ¬μ© λΆκ°λ₯!