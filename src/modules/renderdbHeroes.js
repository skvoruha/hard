const renderdbHeroes = (heroes) => {
  const heroesWrapper = document.querySelector('.heroes')

  localStorage.setItem('heroes', JSON.stringify(heroes))
  heroesWrapper.innerHTML = ''

  heroes.forEach(heroesItem => {
    const itemStart = `
<!-- КАРТОЧКА Героев -->
  <div class="col-12 col-md-6 col-lg-4 col-xl-12 mt-3">
    <div class="card ">
      <div class="card-img-wrapper">
        <span class="card-img-top" style="
            background-image: url('${(heroesItem.photo) ? heroesItem.photo : '' }');

          "></span>
      </div>

      <div class="card-body justify-content-between">
        <div class="card-item card-name">
          <span> Name  </span>
            <span>${(heroesItem.name) ? heroesItem.name : '' }</span>
        </div>

        <div class="card-item card-species">
          <span>Species </span>
          <span>${(heroesItem.species) ? heroesItem.species : ''} </span>
        </div>

        <div class="card-item card-gender">
          <span>Gender </span>

          <span>${(heroesItem.gender) ? heroesItem.gender : ''} </span>
        </div>

        <div class="card-item card-birthDay">
          <span>BirthDay </span>
          <span>${(heroesItem.birthDay) ? heroesItem.birthDay : ''}</span>
        </div>

        <div class="card-item card-deathDay">
          <span>DeathDay </span>
          <span>  ${(heroesItem.deathDay) ? heroesItem.deathDay : ''}</span>
        </div>

        <div class="card-item card-status">
          <span>Status </span>
          <span>  ${(heroesItem.status) ? heroesItem.status : ''}</span>
        </div>

        <div class="card-item card-actors">
          <span>Actors </span>
          <span>${(heroesItem.actors) ? heroesItem.actors : ''} </span>
        </div>
        <div class="card-film">
              <span>Film: </span>`
                let filmItem = ''
                if (heroesItem.movies) {
                  heroesItem.movies.forEach((element,index) => {

                    if (heroesItem.movies.length - 1 == index) {
                      filmItem += `<span> ${element}. </span>`
                    } else {
                      filmItem += `<span> ${element}, </span>`
                    }
                  });
                }

                const itemEnd = `${filmItem}
              </div>
            </div>
          </div>
        </div>`
      heroesWrapper.insertAdjacentHTML('beforeEnd',itemStart + itemEnd)
    });
}

export default renderdbHeroes