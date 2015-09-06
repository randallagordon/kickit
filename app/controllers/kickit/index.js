KickitController.$inject = ['ShoesService']

export default function KickitController (ShoesService) {
  var vm = this

  vm.shoes = ShoesService
}
