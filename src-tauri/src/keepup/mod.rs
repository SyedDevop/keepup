use serde::Serialize;

pub use db::*;
pub use keepup::*;

mod db;
mod keepup;

#[derive(Serialize, Debug)]
pub struct Error {
    msg: String,
}

pub type Result<T> = std::result::Result<T, Error>;

impl<T> From<T> for Error
where
    T: std::error::Error,
{
    fn from(value: T) -> Self {
        Self {
            msg: value.to_string(),
        }
    }
}
