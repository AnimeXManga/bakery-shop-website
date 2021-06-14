import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="header"/>;
    } else {
      $imagePreview = (
        <div className="previewText">
          <p class="font-italic text-white text-center">
            The image uploaded will be rendered inside the box below.
          </p>
        </div>
      );
    }

    return (
      <div className="signup">
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
            <div class="user_card_signup">
              <Link to="/">
                <div class="d-flex justify-content-center">
                  <div class="brand_logo_container">
                    <img
                      src="../../image/logo-Bakery-01.png"
                      class="brand_logo"
                      alt="Logo"
                    />
                  </div>
                </div>
              </Link>
              <div className="textSignUp" id="textSignUp">Sign Up</div>
              <div class="row row justify-content-around">
                <div class="col-6">
                  <input
                    class="form-control"
                    name="firstname"
                    placeholder="First Name"
                    type="text"
                    required
                    autofocus
                  />
                </div>
                <div class="col-6">
                  <input
                    class="form-control"
                    name="lastname"
                    placeholder="Last Name"
                    type="text"
                    required
                  />
                </div>
              </div>
              <input
                class="form-control mt-1"
                name="youremail"
                placeholder="Your Email"
                type="email"
              />
              <input
                class="form-control mt-1"
                name="newpassword"
                placeholder="New Passwordl"
                type="password"
              />
              <input
                class="form-control mt-1"
                name="reenterpassword"
                placeholder="Re-enter Password"
                type="password"
              />
              <label for="" id="textSignUp">
                Date Of Birth
              </label>
              <div class="row form-group">
                <div class="col">
                  <select name="dd" class="form-control">
                    <option value="">Date</option>
                    <option value="1">1 </option>
                    <option value="2">2 </option>
                    <option value="3">3 </option>
                    <option value="4">4 </option>
                    <option value="5">5 </option>
                    <option value="6">6 </option>
                    <option value="7">7 </option>
                    <option value="8">8 </option>
                    <option value="9">9 </option>
                    <option value="10">10 </option>
                    <option value="11">11 </option>
                    <option value="12">12 </option>
                    <option value="13">13 </option>
                    <option value="14">14 </option>
                    <option value="15">15 </option>
                    <option value="16">16 </option>
                    <option value="17">17 </option>
                    <option value="18">18 </option>
                    <option value="19">19 </option>
                    <option value="20">20 </option>
                    <option value="21">21 </option>
                    <option value="22">22 </option>
                    <option value="23">23 </option>
                    <option value="24">24 </option>
                    <option value="25">25 </option>
                    <option value="26">26 </option>
                    <option value="27">27 </option>
                    <option value="28">28 </option>
                    <option value="29">29 </option>
                    <option value="30">30 </option>
                    <option value="31">31 </option>{" "}
                  </select>
                </div>
                <div class="col">
                  <select name="mm" class="form-control">
                    <option value="">Month</option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                </div>
                <div class="col">
                  <select name="yyyy" class="form-control">
                    <option value="0">Year</option>
                    <option value="1955">1955 </option>
                    <option value="1956">1956 </option>
                    <option value="1957">1957 </option>
                    <option value="1958">1958 </option>
                    <option value="1959">1959 </option>
                    <option value="1960">1960 </option>
                    <option value="1961">1961 </option>
                    <option value="1962">1962 </option>
                    <option value="1963">1963 </option>
                    <option value="1964">1964 </option>
                    <option value="1965">1965 </option>
                    <option value="1966">1966 </option>
                    <option value="1967">1967 </option>
                    <option value="1968">1968 </option>
                    <option value="1969">1969 </option>
                    <option value="1970">1970 </option>
                    <option value="1971">1971 </option>
                    <option value="1972">1972 </option>
                    <option value="1973">1973 </option>
                    <option value="1974">1974 </option>
                    <option value="1975">1975 </option>
                    <option value="1976">1976 </option>
                    <option value="1977">1977 </option>
                    <option value="1978">1978 </option>
                    <option value="1979">1979 </option>
                    <option value="1980">1980 </option>
                    <option value="1981">1981 </option>
                    <option value="1982">1982 </option>
                    <option value="1983">1983 </option>
                    <option value="1984">1984 </option>
                    <option value="1985">1985 </option>
                    <option value="1986">1986 </option>
                    <option value="1987">1987 </option>
                    <option value="1988">1988 </option>
                    <option value="1989">1989 </option>
                    <option value="1990">1990 </option>
                    <option value="1991">1991 </option>
                    <option value="1992">1992 </option>
                    <option value="1993">1993 </option>
                    <option value="1994">1994 </option>
                    <option value="1995">1995 </option>
                    <option value="1996">1996 </option>
                    <option value="1997">1997 </option>
                    <option value="1998">1998 </option>
                    <option value="1999">1999 </option>
                    <option value="2000">2000 </option>
                    <option value="2001">2001 </option>
                    <option value="2002">2002 </option>
                    <option value="2003">2003 </option>
                    <option value="2004">2004 </option>
                    <option value="2005">2005 </option>
                    <option value="2006">2006 </option>
                  </select>
                </div>
              </div>

              <label class="control-label" id="textSignUp">Profile Photo</label>

              {/* upload image */}
              <div class="row py-4">
                <div class="col-lg-6 mx-auto">
                  <div className="previewComponent rounded-pill bg-white shadow-sm">
                    <form onSubmit={(e) => this._handleSubmit(e)}>
                      <input
                        id="upload"
                        className="fileInput form-control border-0"
                        type="file"
                        onChange={(e) => this._handleImageChange(e)}
                      />
                      <label
                        id="upload-label"
                        for="upload"
                        class="font-weight-light text-muted"
                      >
                        <small class="text-uppercase font-weight-bold text-muted">
                          Choose file
                        </small>
                        <i class="fa fa-cloud-upload mr-3 text-muted"></i>
                      </label>
                    </form>
                  </div>
                  <div id="image-area" className="imgPreview mt-4">
                    {$imagePreview}
                    <img
                      id="imageResult"
                      src="#"
                      alt=""
                      class="img-fluid rounded shadow-sm mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
