import React from 'react';
import '../css/App.css';
import iamthatiamImg from '../assets/img/iamthatiam.jpg';

const Home = () => (
  <article>
    <section>
      <h1>Introduction</h1>
      <div className="introheader">
        <p>
          This is a website that investigates the history and technology of the visual artist and
          writer Brion Gysin's
          <strong>Permutation Poems</strong>. This is a random <a href="blah.html">link</a>.
        </p>
      </div>

      <div className="abstract">
        <div className="header">
          <div className="header1Blue">Abstract</div>
        </div>
        <p>
          {' '}
          Between 1958 and 1981[check], Brion Gysin wrote a series of <b>11/12 Permutation Poem</b>,
          in which the four or five-word title of the poem, would be permutated into some or all of
          its possible orders. Some of these permutation poems were run through a computer, making
          them very early examples of computer-generated poetry. Prior scholarship on these poems
          has frequently failed to recognise that there are several different versions of each of
          them, which has led to an inaccurate dating of many of them, and a misunderstanding about
          the role of technology within all of them. Additionally - and probably most importantly -
          the failure of prior research to contextually situate this work within the history of
          early computing has led to an undervaluing of its technologically pioneering and
          progressive nature, as well as the significant difficulty that was overcome when producing
          this work in the early 1960s. I attempt to correct these problems by providing the first
          accurrate comprehensive chronology and bibliography of these works, along with an in-depth
          look at technical implementations of permutation algorithms in this era.
        </p>
      </div>

      <div className="blockRed">
        <div className="header">
          <div className="header1Red">I AM THAT I AM</div>
        </div>
        <div className="actualImage">
          <img src={iamthatiamImg} alt="Extract of Gysin's poem 'I Am That I Am'" />
        </div>
        <div className="caption">
          A very short extract of the start of Brion Gysin's poem <i>I AM THAT I AM</i>
        </div>
      </div>

      <div className="text1">
        <p>
          One of the main problems in trying to convince a contemporary reader of the value and
          importance of Brion Gysin’s <strong>Permutation Poems</strong> can be summed up in one
          line:
        </p>
      </div>

      <div className="code">
        <p>
          {'["I", "AM", "THAT", "I", "AM"].reverse.permutation{|x| puts "#{x.reverse.join(" ")}"}'}
        </p>
      </div>

      <div>
        <p>
          This is a piece of code in the programming language <b>Ruby</b> that recreates the
          entirety of Gysin's most famous <b>Permutation Poem</b>: <b>I AM THAT I AM</b>. The fact
          that you can now take any contemporary laptop, download a Ruby interpreter online for
          free, and use such little code to generate the entirety of this work can prevent the early
          21st Century reader for seeing this poem for what it is: a revolutionary and
          technologically progressive piece of art built with cutting-edge technology. While today
          many of you would be able to run the code above and recreate Gysin's poem in milliseconds,
          you would be relying on pioneering research done into the implementation of permutation
          algorithms on computing machinery done in the late 1950s and early 1960s. The truth of the
          matter is that, although it looks <b>WORD???</b>, and is trivial to compute now, when
          Gysin and the Cambridge mathematician Ian Sommerville used computers to take his original
          hand-written poems and generate more extensive versions in 1960, they were utilizing
          cutting-edge technology and techniques that had not even existed a few years earlier.{' '}
        </p>
      </div>

      <div className="text2">
        <p>
          Vivamus felis nisi, sollicitudin non ex ac, ornare tempor tortor. Ut elementum diam
          volutpat erat gravida volutpat. Aenean porttitor ligula eget lorem consequat lacinia ut
          nec neque. Donec consequat libero dapibus, ultricies purus in, blandit nisi. Phasellus
          dictum, massa nec interdum viverra, massa lacus porttitor libero, eget porttitor eros sem
          id sem. Proin commodo nulla odio, eget iaculis dui sollicitudin at. Vivamus a ex risus.
          Nullam aliquet at diam ut lobortis. Sed vulputate ex velit, sed pulvinar purus auctor a.
          Etiam convallis volutpat felis, eu pharetra lectus tincidunt in. In vehicula magna orci,
          vitae iaculis magna elementum sit amet. Sed eu diam orci. Sed sit amet massa in magna
          fermentum lobortis. Duis at libero quis libero imperdiet vulputate. Donec ac posuere mi.
          Sed lacinia orci et imperdiet finibus.
        </p>
      </div>

      <div className="perm4">
        <p>
          Etiam et libero ut purus sagittis ornare et sed velit. Morbi eget quam ex. Vestibulum
          dictum ligula sit amet augue congue, sed posuere odio malesuada. Nulla nec ligula iaculis,
          molestie urna vitae, congue libero. Integer vitae fermentum nibh. Nullam dapibus mi ante,
          sit amet fermentum tortor commodo quis. Donec nec sapien non libero commodo pretium.
          Quisque non purus et metus pharetra vestibulum. Vestibulum ac nisi ut sem mollis pharetra
          at et est. Duis convallis nunc nec ante commodo, nec accumsan metus semper. Pellentesque
          vulputate, felis eu porta vestibulum, leo ex fermentum nulla, sit amet tristique erat quam
          eleifend tortor. Maecenas volutpat purus nec elit malesuada, sed pretium felis
          ullamcorper.
        </p>
      </div>

      <p>
        Suspendisse egestas risus sed nibh sodales accumsan. Phasellus pulvinar posuere magna, quis
        cursus enim suscipit ut. Sed a viverra dui. Pellentesque egestas diam sit amet lobortis
        mattis. Donec posuere metus in nisi volutpat, at vestibulum turpis volutpat. In sed mauris
        eleifend, scelerisque nunc vel, placerat nulla. Aliquam pellentesque feugiat rutrum. Integer
        neque turpis, laoreet eget augue non, tristique imperdiet nunc. Mauris tellus turpis,
        lacinia vitae sapien ac, mollis volutpat ex.
      </p>
    </section>
    <section>
      <h1>About</h1>
      <div className="perm5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue nec neque
          ullamcorper vehicula. Vestibulum tempor arcu sed augue convallis, eget placerat velit
          consequat. Quisque nec vehicula metus. Aenean ullamcorper quis lacus at tincidunt. Proin
          ut scelerisque lectus, eget posuere eros. Fusce eros ipsum, efficitur eget justo vel,
          faucibus convallis odio. Nullam erat massa, scelerisque eget libero posuere, convallis
          congue eros.
        </p>
      </div>
      <div className="perm6">
        <p>
          Aenean est justo, elementum eu interdum vitae, bibendum ut velit. Donec nec est
          sollicitudin odio egestas aliquam. Pellentesque dictum pellentesque vehicula. Nulla
          sollicitudin leo lacinia suscipit gravida. Cras sollicitudin semper lobortis. Cras
          consequat dapibus ex ac sollicitudin. Aenean vehicula, dolor vitae molestie eleifend, nibh
          lacus ullamcorper est, non sodales erat est interdum turpis. Aliquam tempus, nunc vitae
          venenatis laoreet, massa enim fermentum dui, a congue purus dui vitae ante. Curabitur
          augue quam, consectetur in sodales fermentum, imperdiet ac elit. Ut hendrerit viverra odio
          pulvinar mollis. Vestibulum varius tortor sed congue mollis.
        </p>
      </div>

      <div className="perm7">
        <p>
          Vivamus felis nisi, sollicitudin non ex ac, ornare tempor tortor. Ut elementum diam
          volutpat erat gravida volutpat. Aenean porttitor ligula eget lorem consequat lacinia ut
          nec neque. Donec consequat libero dapibus, ultricies purus in, blandit nisi. Phasellus
          dictum, massa nec interdum viverra, massa lacus porttitor libero, eget porttitor eros sem
          id sem. Proin commodo nulla odio, eget iaculis dui sollicitudin at. Vivamus a ex risus.
          Nullam aliquet at diam ut lobortis. Sed vulputate ex velit, sed pulvinar purus auctor a.
          Etiam convallis volutpat felis, eu pharetra lectus tincidunt in. In vehicula magna orci,
          vitae iaculis magna elementum sit amet. Sed eu diam orci. Sed sit amet massa in magna
          fermentum lobortis. Duis at libero quis libero imperdiet vulputate. Donec ac posuere mi.
          Sed lacinia orci et imperdiet finibus.
        </p>
      </div>
      <div className="perm8">
        <p>
          Etiam et libero ut purus sagittis ornare et sed velit. Morbi eget quam ex. Vestibulum
          dictum ligula sit amet augue congue, sed posuere odio malesuada. Nulla nec ligula iaculis,
          molestie urna vitae, congue libero. Integer vitae fermentum nibh. Nullam dapibus mi ante,
          sit amet fermentum tortor commodo quis. Donec nec sapien non libero commodo pretium.
          Quisque non purus et metus pharetra vestibulum. Vestibulum ac nisi ut sem mollis pharetra
          at et est. Duis convallis nunc nec ante commodo, nec accumsan metus semper. Pellentesque
          vulputate, felis eu porta vestibulum, leo ex fermentum nulla, sit amet tristique erat quam
          eleifend tortor. Maecenas volutpat purus nec elit malesuada, sed pretium felis
          ullamcorper.
        </p>
      </div>

      <div className="perm9">
        <p>
          Suspendisse egestas risus sed nibh sodales accumsan. Phasellus pulvinar posuere magna,
          quis cursus enim suscipit ut. Sed a viverra dui. Pellentesque egestas diam sit amet
          lobortis mattis. Donec posuere metus in nisi volutpat, at vestibulum turpis volutpat. In
          sed mauris eleifend, scelerisque nunc vel, placerat nulla. Aliquam pellentesque feugiat
          rutrum. Integer neque turpis, laoreet eget augue non, tristique imperdiet nunc. Mauris
          tellus turpis, lacinia vitae sapien ac, mollis volutpat ex.
        </p>
      </div>
    </section>
  </article>
);

export default Home;
