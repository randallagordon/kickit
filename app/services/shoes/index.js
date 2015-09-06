ShoesService.$inject = ['$window', 'FIREBASE_URI', '$firebaseArray']

export default function ShoesService ($window, FIREBASE_URI, $firebaseArray) {
  const shoesURI = `${FIREBASE_URI}/shoes`
  let ref = new $window.Firebase(shoesURI)
  let shoes = $firebaseArray(ref)

  return shoes
}
