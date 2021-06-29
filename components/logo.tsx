import * as React from 'react'

function Logo(props) {
  return (
    <svg viewBox='0 0 50 50' {...props}>
      <path d='M22.085.16C16.402.908 11.461 3.27 7.508 7.146 4.096 10.484 1.806 14.51.656 19.199.162 21.22-.009 22.768 0 25.035c.01 4.114.818 7.501 2.67 11.232 1.854 3.712 4.78 7.032 8.354 9.443 4.77 3.215 10.824 4.765 16.288 4.162 6.272-.698 11.28-3.062 15.5-7.338 5.7-5.788 8.096-13.27 6.88-21.612-.704-4.899-3.507-10.295-7.147-13.787-3.44-3.291-7.574-5.53-12.097-6.544-2.595-.574-5.93-.756-8.363-.43zm5.997 3.158c6.851 1.004 12.904 5.434 16.04 11.739a22.056 22.056 0 011.977 6.2c.238 1.473.238 5.424 0 6.792-.637 3.617-1.929 6.678-4.096 9.615-.36.498-1.301 1.55-2.08 2.335l-1.417 1.416.057.736.057.727-.275-1.052c-.323-1.253-.608-1.952-1.027-2.507-.17-.23-.313-.468-.313-.535.01-.058.247-.287.541-.498.533-.383 1.264-1.158 1.663-1.77.143-.2.343-.363.542-.42.475-.135 1.017-.7 1.14-1.187.134-.469.086-.689-.237-1.177l-.238-.344.21-.947c.209-.938.209-.957.047-2.43a35.67 35.67 0 01-.152-1.732c0-.335-.732-1.808-1.312-2.622-.969-1.377-1.33-1.703-2.736-2.392-1.635-.813-2.233-.947-3.887-.88-1.444.058-2.66.335-3.773.87-1.121.537-2.394 1.81-3.62 3.637-.419.612-.447.688-.447 1.282 0 .459-.095.908-.342 1.683-.418 1.311-.4 1.617.2 2.64.237.403.427.785.427.833 0 .058-.123.24-.285.412-.504.545-.494 1.387.029 1.951.294.316 1.016.613 1.197.488.047-.028.01-.268-.095-.526-.285-.756-.21-.784.142-.048.694 1.474 1.635 2.42 3.146 3.167 1.14.555 2.119.804 3.516.87.627.03 1.055.087.95.125-.57.2-3.193-.172-4.4-.631l-.627-.24-.161.22c-.352.46-1.046 1.98-1.217 2.66a18.19 18.19 0 00-.294 1.76c-.19 1.79-.266 1.952-.466.9-.332-1.741-2.566-9.988-2.841-10.486-.038-.076-.637-.277-1.33-.45-.694-.181-1.455-.392-1.692-.488-.228-.086-.447-.133-.475-.105-.029.029.133.306.36.613.229.306.552.775.723 1.033.447.717 1.482 2.956 1.787 3.846.332.947.304 1.014-.694 1.865-.38.326-.694.66-.694.747 0 .076.437.555.97 1.052.921.87.96.928.883 1.196l-.085.287-.038-.297c-.02-.23-.247-.487-1.017-1.224-.551-.507-.998-.986-.998-1.062 0-.067.342-.421.75-.785 1.046-.899 1.056-.956.628-2.057-.722-1.846-2.271-4.697-2.841-5.233-.181-.172-.248-.335-.248-.593 0-.392.086-.488.57-.65.495-.163.98-.536 1.312-1.005.266-.373.38-.44 1.112-.67.447-.143.808-.297.808-.335 0-.048-.171-.296-.38-.545-.41-.498-.485-.851-.21-.938.086-.028.419-.076.732-.114.314-.03.599-.077.637-.106.038-.019-.057-.382-.21-.803-.16-.421-.284-.823-.284-.88 0-.068.247-.192.55-.297.676-.22 1.825-.794 1.825-.909 0-.048-.351-.278-.77-.507-.826-.44-1.662-1.11-1.539-1.225.038-.038.38-.172.741-.287.913-.306 1.882-.756 2.642-1.244.352-.22.637-.42.618-.43a109.15 109.15 0 00-2.86-1.225c-.114-.047-.143-.105-.096-.19.039-.078.666-.69 1.388-1.36.713-.679 1.302-1.262 1.302-1.3 0-.077-.59-.182-2.328-.431-.627-.096-1.179-.192-1.217-.23-.047-.038.39-.88.97-1.865.94-1.617 1.12-1.962 1.026-1.962-.02 0-.798.278-1.73.622-1.359.498-1.73.593-1.824.498-.21-.21-.409-1.79-.409-3.205V9.336l-.77.41c-.902.489-2.11 1.436-2.67 2.096-.209.258-.428.469-.466.469-.047 0-.408-.44-.817-.986-.703-.937-1.89-2.267-2.024-2.267-.038 0-.114.421-.171.928-.171 1.435-.675 3.186-.922 3.186-.066 0-.522-.191-1.007-.421-.78-.364-1.967-.727-2.404-.727-.114 0-.057.172.218.737.418.851.798 2.181.751 2.64l-.028.306-.856.067c-2.49.192-3.658.307-3.658.354 0 .039.418.488.93 1.014.96.976 1.664 2.02 1.616 2.383-.019.134-.503.535-1.501 1.234-.808.564-1.483 1.071-1.502 1.12-.019.047.086.114.238.152 1.017.22 1.454.364 1.815.574.494.297 1.007.737 1.264 1.1l.19.269-1.064 1.061c-.894.9-1.046 1.081-.932 1.187.076.067.647.287 1.274.478.627.192 1.178.392 1.226.44.047.048-.029.536-.21 1.206-.16.622-.265 1.167-.237 1.215.048.086 1.616.01 1.872-.086.238-.087.333.143.4.899.037.44.094.813.132.832.076.048 1.14-.411 1.14-.488 0-.028-.123-.23-.275-.45-.637-.937-1.074-2.114-1.416-3.845-.228-1.1-.332-2.153-.218-2.153.038 0 .104.306.142.68.19 2.133 1.169 4.84 2.062 5.74.228.23.723.555 1.198.775l.798.373-.029.354-.028.354-2.11.708-2.11.708-.19.583a138.37 138.37 0 00-.96 3.31c-.779 2.727-1.016 3.416-.902 2.603.047-.402.028-.44-.456-.976-3.032-3.291-4.904-7.147-5.635-11.624-.276-1.636-.248-5.138.047-6.745.827-4.516 2.651-8.2 5.635-11.347 4.866-5.118 11.68-7.472 18.712-6.448zM15.224 34.239c-.684 1.426-1.9 4.841-1.796 5.023.047.086.456.478.912.88.466.402.856.775.875.842.028.067-.114.277-.314.478-.21.22-.285.268-.19.125.37-.584.399-.507-.56-1.397-.647-.603-.903-.9-.903-1.062 0-.498 1.881-5.29 2.08-5.29.048 0 0 .181-.104.401z' />
    </svg>
  )
}

export default Logo
