<template>
    <div class="main">
        <!--Boostrap grid with three sizing options-->
        <div class="container about-me-grid">
            <h2>About Me</h2>
            <div class="row">
                <article id="bio" class="col-lg-9 col-md-8 col-sm-12">
                    <div class="row">
                        <div class="col-lg-5 col-md-7 col-sm-12 mx-auto"> <!--mx-auto used to center image-->
                            <img class="about-picture img-fluid" src="../assets/images/me.jpeg" alt="Image of female sitting on log at the beach of a cloudy, cool day." height="384" width="512">
                        </div>
                        <section class="col-lg-7 col-med-5 col-sm-12 column-gap-3">
                            <h3>Hello! I'm Julianne. </h3>
                            <p>I'm originally from Virginia but I moved out to Oregon in 2020 to have more access to the outdoors. Growing up I spent my summers in Montana at my family's cabin and that's where my love of mountains began. Now living in Oregon, I take every opportunity I have to get outdoors, whether that's hiking to wildflower meadows in the Gorge, backpacking to alpine lakes in the summer, or biking around Portland just to enjoy a sunny day. </p>      
                        </section>
                    </div>
                </article>
                <!--Bootstrap list-->
                <section class="col-lg-3 col-md-4 col-sm-12" id="resources">
                    <h3>Favorite Resources</h3>
                    <div class="list-group">
                        <a href="https://www.alltrails.com" class="list-group-item list-group-item-action">AllTrails</a>
                        <a href="https://www.oregonhikers.org" class="list-group-item list-group-item-action">OregonHikers.org</a>
                        <a href="https://www.hikeoregon.net" class="list-group-item list-group-item-action">Hike Oregon</a>
                        <a href="https://www.freshoffthegrid.com" class="list-group-item list-group-item-action">Fresh off the Grid</a>
                    </div>
                </section>
            </div>
            <div class="row mt-5">
                <div class="col-12">
                    <h3>How to get in touch</h3>
                    <p>Email: xxxxx@xxx.com</p>
                </div>
            </div>
        </div>
    </div>
</template>