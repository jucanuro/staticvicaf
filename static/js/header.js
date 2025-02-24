document.addEventListener("DOMContentLoaded", function(e) {
  const templateHeader = `
  <header class="fixed-header header bg-white text-gray-900 w-full shadow-md border-b border-gray-200">
      <div class="container mx-auto flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold lg:px-8">
          <img class="w-auto h-12 object-contain" src="static/img/Logo.png" alt="Reform" width="158" height="48">
        </a>

        <!-- Navigation Links -->
        <nav class="hidden md:flex text-sm font-medium space-x-6">
            <a id="tab1" href="#home" class="nav-link p-2 rounded-md transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-600 shadow-sm">Inicio</a>
            <a id="tab2" href="#nosotros" class="nav-link p-2 rounded-md transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-600 shadow-sm">Nosotros</a>
            <a id="tab3" href="#logros" class="nav-link p-2 rounded-md transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-600 shadow-sm">Logros</a>
            <a id="tab4" href="#servicios" class="nav-link p-2 rounded-md transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-600 shadow-sm">Servicios</a>
            <a id="tab5" href="#clientes" class="nav-link p-2 rounded-md transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-600 shadow-sm">Clientes</a>
            <a id="tab6" href="#contactenos" class="nav-link p-2 rounded-md transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-600 shadow-sm">Contáctenos</a>
            <a id="tab7" href="#bolsa" class="nav-link p-2 rounded-md transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-600 shadow-sm">Bolsa de Trabajo</a>
        </nav>

        <!-- Social Media Links -->
        <div class="flex space-x-4 lg:px-8 px-4">
          <a href="#" class="text-blue-500 hover:text-blue-700"><i class="fab fa-linkedin fa-lg"></i></a>
          <a href="#" class="text-blue-500 hover:text-blue-700"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#" class="text-pink-500 hover:text-pink-700"><i class="fab fa-instagram fa-lg"></i></a>
          <a href="#" class="text-blue-500 hover:text-blue-700"><i class="fas fa-envelope fa-lg"></i></a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="menu-toggle" class="md:hidden p-2 rounded text-gray-800">
            <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white text-sm border-t border-gray-200">
          <a href="#" class="block p-3 text-gray-800 hover:bg-blue-600 hover:text-white">Inicio</a>
          <a href="#" class="block p-3 text-gray-800 hover:bg-blue-600 hover:text-white">Nosotros</a>
          <a href="#" class="block p-3 text-gray-800 hover:bg-blue-600 hover:text-white">Logros</a>
          <a href="#" class="block p-3 text-gray-800 hover:bg-blue-600 hover:text-white">Servicios</a>
          <a href="#" class="block p-3 text-gray-800 hover:bg-blue-600 hover:text-white">Clientes</a>
          <a href="#" class="block p-3 text-gray-800 hover:bg-blue-600 hover:text-white">Contáctenos</a>
          <a href="#" class="block p-3 text-gray-800 hover:bg-blue-600 hover:text-white">Bolsa de Trabajo</a>
      </div>
    </header>
  `;

  document.getElementById("header-content").innerHTML = templateHeader;

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });
});


    


    