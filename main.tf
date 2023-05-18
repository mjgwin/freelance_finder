terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    bucket = "freelance-finder-tf-bucket"
    key    = "tf_state"
    region = "us-east-1"
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

resource "aws_dynamodb_table" "freelance-finder-user-table" {
  name           = "freelance-finder-user-table"
  billing_mode   = "PROVISIONED"
  read_capacity  = 20
  write_capacity = 20
  hash_key       = "user_id"

  attribute {
    name = "user_id"
    type = "S"
  }

  attribute {
    name = "user_email"
    type = "S"
  }

  attribute {
    name = "user_password"
    type = "S"
  }

}

