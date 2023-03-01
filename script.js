fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => 
        {
            for (let index = 0; index < json.length; index++) {
                
                const accorditem = document.createElement('div');
                accorditem.classList.add('accordion-item');
                const accordheader = document.createElement('h2');
                accordheader.id = `flush-heading${index}`;
                accordheader.classList.add('accordion-header');
                const accordbtn = document.createElement('button');
                accordbtn.classList.add('accordion-button', 'collapsed');
                accordbtn.dataset.bsToggle = 'collapse';
                accordbtn.dataset.bsTarget = `#flush-collapse${index}`;
                accordbtn.type = 'button';
                accordbtn.ariaExpanded = 'false';
                accordbtn.ariaBusy = `flush-collapse${index}`;
                const flushCollapseInd = document.createElement('div');
                fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${index}`)
                    .then(x=>x.json())
                    .then(res=>
                        {
                            let imgs = '';
                            for (let index1 = 0; index1 < res.length; index1++) {
                                imgs += `<img src="${res[index1].url}" width="75" height="75">\n`;
                            }
                            fetch(`https://jsonplaceholder.typicode.com/users/${json[index].userId}`)
                                .then(resp => resp.json())
                                .then(js=>
                                    {
                                        const accord = 
                                        `<div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-heading${index}">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                                    Title: <strong>${json[index].title}</strong>, Author:  <strong>${js.name}</strong>
                                                </button>
                                            </h2>
                                            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    ${imgs}
                                                </div>
                                            </div>
                                        </div>`;
                                        document.querySelector('.accordion').insertAdjacentHTML('beforeend', accord);
                                    }); 
                        });  
                               
            }            
        });
